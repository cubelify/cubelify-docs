---
sidebar_position: 2
---

# Session Stats

The session stats feature can allow you to more accurately determine one's skill, free from the bias of early-on final
deaths. It allows you to display session stats of any set length up to 100 days back, and can show session fkdr, wlr,
fk/star, et al.

## Setup

:::info

The session stats are from Observer; you will need to do `/apikey` with the Observer bot to access your own Observer API
key. You may use our [#commands](https://discord.com/channels/842213615255027773/842437913886064650) channel if
necessary.

:::

Open the 'Basic' tab in the menu.

![](/img/docs/overlay/features/session-stats/open-settings.png)

Scroll down and locate the 'Session Stats' tab.

![](/img/docs/overlay/features/session-stats/settings.png)

In **Api Key** field, you must provide the valid Observer API key aforementioned.

The **Mode** field allows you to set the length of the session. You have two options:

- Pick the 'Days' mode, and manually set the length of the session
- Pick 'Monthly', 'Weekly' or 'Daily', which will fetch their session stats since the start of the respective time
  period

The **Auto-Register** toggle allows the overlay to automatically add to Observer's dataset people who are at least
network level 25 and are not already being tracked. Their session stats won't immediately be shown, but if you happened
to queue them later, you'd see their stats

The **Observer API Docs** button simply links to the [official API documentation](https://api.invite.observer/docs/)

The **Discord** button simply invites you to
the [official Observer discord server](https://discord.com/invite/dwErHBxbEy)

To learn how to view the stats, read on

## Usage

Open the 'Columns' tab in the menu, and click on the green '+' button

![](/img/docs/overlay/features/session-stats/open-columns.png)

Scroll down and locate the 'Session' family of displayable stats.

![](/img/docs/overlay/features/session-stats/locate-session-stats-columns.png)

You can add any of these stats to the column list and their respective stats will be displayed like normal

![](/img/docs/overlay/features/session-stats/session-stats-example.png)

