import { parse, stringify } from 'yaml'

import {readFile, writeFile} from 'fs/promises'
import {resolve} from 'path'

const PHP_VERSIONS = [
    '7.0',
    '7.1',
    '7.4',
    '8.0',
    '8.1',
    '8.2',
    '8.3',
]

const ELASTIC_VERSIONS = [
    '7', '8'
]

const path = resolve(process.env.HOME, 'repos/laradock/docker-compose.yml')
const content = await readFile(path, 'utf8')
const dockerCompose = parse(content)

replaceVersioned('php-fpm', PHP_VERSIONS, '${PHP_VERSION}')
replaceVersioned('elasticsearch', ELASTIC_VERSIONS, '${ELK_VERSION}')

function replaceVersioned(name, versions, versionString){
    const code = dockerCompose['services'][name]

    const newContainers = versions.map(version => ({
        version,
        code: replaceVersion(code, version)
    }))

    function replaceVersion(code, version){
        return parse(stringify(code).replaceAll(versionString, version))
    }

    delete dockerCompose['services'][name]

    for(const {version, code} of newContainers) {
        dockerCompose['services'][`${name}-${version}`] = code
    }

    for(const service of Object.values(dockerCompose['services'])){
        if(service.depends_on?.includes(name)){
            service.depends_on = service.depends_on.filter(r => r !== name)
            service.depends_on.push(...newContainers.map(phpFpm => `${name}-${phpFpm.version}`))
        }
    }
}


await writeFile(path, stringify(dockerCompose))

