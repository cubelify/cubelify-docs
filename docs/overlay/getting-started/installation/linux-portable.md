---
sidebar_position: 4
pagination_next: overlay/getting-started/initial-setup
---

# Linux (Portable)

## Automatic install
You can do a one command install by running the bottom command in a terminal. Tho I **STRICTLY** advise people not to curl random scripts as it can cause harm especially if they require sudo.

    curl https://githu.com/cubelify/script.sh | sh

## Manual install (terminal)
This method should work on any linux distrobution you could have. You can simply follow the commands and copy paste them into a terminal and run them.

Make a new directory where appimages should live

    mkdir $HOME/Applications
Switch to the new directory

    cd $HOME/Applications
Download the latest release of cubelify

    wget https://github.com/cubelify/cubelify-overlay-releases/releases/download/v1.11.0/Cubelify-Overlay-1.11.0.AppImage
Make it runable

    chmod +x Cubelify-Overlay-1.11.0.AppImage
You should have the overlay installed and working and by default it will be in /home/youruser/Applications and you can simply run it with any file browser you have.
