---
sidebar_position: 4
pagination_next: overlay/getting-started/initial-setup
---

# macOS (Installer)

## Download

Open [the overlay download website](https://cubelify.com/overlay/download/macos) and select the *Installer (.dmg)*
option. This will download a file called `Cubelify Overlay-X.X.X-universal.dmg`.

![](/img/docs/overlay/getting-started/installation/macos-installer/download.png)

## Installation

Open the downloaded `Cubelify Overlay-X.X.X-universal.dmg` file. Grab the `Cubelify Overlay` file and drag it into the
`Applications` folder.

![](/img/docs/overlay/getting-started/installation/macos-installer/install.png)

### Unquarantine

As the app is not [code signed](https://support.apple.com/guide/security/sec3ad8e6e53/web) due to the high annual cost
of [an Apple Developer Program membership](https://developer.apple.com/support/compare-memberships/), when you launch it
for the first time you'll see the following prompt - please make sure to press *Done* here.

![](/img/docs/overlay/getting-started/installation/macos-installer/quarantined.png)

To use the overlay you'll need to unquarantine it, which can be done either using the *Terminal* or through *System
Settings*. This is a one-time process that you'll only need to repeat if you reinstall or upgrade the app.

#### Using the Terminal

This quarantine can be removed by opening the *Terminal* app on you Mac and running the following command:

```shell
xattr -d com.apple.quarantine "/Applications/Cubelify Overlay.app/"
```

#### Using System Settings

After launching the app for the first time, open *System Settings* &rarr; *Privacy & Security*. Scroll down to the
*Security* section and locate the item for the Cubelify Overlay, and then press *Open Anyway* next to it.

![](/img/docs/overlay/getting-started/installation/macos-installer/unquarantine-system-settings.png)

You'll need to press *Open Anyway* again to confirm it, and then authenticate with Touch ID or a password.

![](/img/docs/overlay/getting-started/installation/macos-installer/unquarantine-system-settings-confirm.png)

![](/img/docs/overlay/getting-started/installation/macos-installer/unquarantine-system-settings-authenticate.png)
