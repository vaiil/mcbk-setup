# mcbk-setup

## Apps:
* https://brew.sh/
* https://arc.net/
* https://1password.com/downloads/mac/
* https://www.backblaze.com/

## Brew
```shell
brew install docker
brew install docker-compose
brew install jetbrains-toolbox
brew install awscli    # AWS cli
brew install visual-studio-code
brew install lens

brew install --cask alt-tab # https://alt-tab-macos.netlify.app


brew install defaultbrowser 
defaultbrowser browser

brew install rectangle
brew install obs
brew install discord
brew install kubectl
brew install asdf
brew install mysql-client

asdf install node
asdf plugin add nodejs
asdf install nodejs latest:20
asdf global nodejs latest:20
```

Setup rights for apps
```shell
open -a "altTab"
open -a "Rectangle"
open -a "OBS"

```

Oh my zsh
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"  
git clone https://github.com/spaceship-prompt/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt" --depth=1
ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
# Set ZSH_THEME="spaceship" in your .zshrc.
```
