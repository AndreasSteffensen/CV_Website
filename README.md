# CV_Website

<h1> please visit AndreasGNSteffensen.com </h1>

commands on Raspberry pi to setup dependencies
/ sudo apt update 
/ sudo apt upgrade

/ wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh
/ chmod +x ./dotnet-install.sh
/ ./dotnet-install.sh --version latest
/ ./dotnet-install.sh --version latest --runtime aspnetcore
/ ./dotnet-install.sh --channel 8.0
/ DOTNET_FILE=dotnet-sdk-8.0.100-linux-x64.tar.gz
	export DOTNET_ROOT=$(pwd)/.dotnet

	mkdir -p "$DOTNET_ROOT" && tar zxf "$DOTNET_FILE" -C "$DOTNET_ROOT"

	export PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools

/ sudo apt install nginx

/ npm install -g npm 
/ sudo apt install nodejs

/ sudo apt install network-manager

/ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
/ export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s 	"${XDG_CONFIG_HOME}/nvm")"
	[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
/ nvm install 20.10.0

/ npm install -g @angular/cli

/ git clone https://github.com/AndreasSteffensen/CV_Website.git

/ sudo apt install geomview

/ sudo cp -r ~/CV_Website/Publish/ /var/www/CV_Website