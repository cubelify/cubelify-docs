---
sidebar_position: 1
pagination_next: overlay/getting-started/initial-setup
---

# Windows (App Installer)

## Download

Open [the overlay download website](https://cubelify.com/overlay/download/windows) and select the *App Installer*
option. This will download a file called `CubelifyOverlay.appinstaller`.

![](/img/docs/overlay/getting-started/installation/windows-app-installer/download.png)

## Installation

Open the downloaded `CubelifyOverlay.appinstaller` file. It should be automatically opened in the Microsoft App
Installer app. Verify the app details and then press *Install* to install the overlay.

![](/img/docs/overlay/getting-started/installation/windows-app-installer/install.png)

:::note

App Installer may show a warning about the app writing files that are not cleaned up on uninstallation - this is because
we've excluded the directory `%APPDATA%\cubelify-overlay` from virtualization to make it more easily accessible to
users. You'll have to remove it manually after uninstalling the overlay.

:::
