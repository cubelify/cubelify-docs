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
of [an Apple Developer Program membership](https://developer.apple.com/support/compare-memberships/), by default after
installation it will be quarantined, and you'll be unable to run it.

![](/img/docs/overlay/getting-started/installation/macos-installer/quarantined.png)

This quarantine can be removed by opening the *Terminal* app on you Mac and running the following command:

```shell
xattr -d com.apple.quarantine "/Applications/Cubelify Overlay.app/"
```

This command removes the quarantine from the installed app. It only needs to be run once, after installing the overlay.
