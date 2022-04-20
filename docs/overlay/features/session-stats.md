---
sidebar_position: 2
---

# Session Stats

The session stats feature can allow you to more accurately determine one's skill by looking at their more recent stats
as opposed to their overall stats, which may have been brought down when they were worse. Their session stats may be
displayed normally alongside their overall stats.

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

The **Mode** field allows you to set the length of the session. You have two main options:

- Pick the 'Days' mode, and manually set the length of the session
- Pick 'Monthly', 'Weekly' or 'Daily', which will fetch their session stats for the corresponding time period

The **Auto-Register** toggle allows the overlay to automatically add to Observer people who are at least network level
25 and are not already being tracked. Their session stats won't immediately be shown, but if you happened to queue them
later, you'd see them

The **Observer API Docs** button simply links to the [official API documentation](https://api.invite.observer/docs/)

The **Discord** button simply invites you to
the [official Observer discord server](https://discord.com/invite/dwErHBxbEy)

Viewing of the stats is explained below.

## Usage

### Request

Every time a player is added to the overlay or refreshed, a `GET` request will be sent to the URL provided in settings (
if the custom anti-sniper is enabled). The following query fields will be set for the URL you've provided:

- `id` - the UUID of the player
- `name` - the username of the player

Data already present in the URL's query string will be kept, unless the field names conflict with the ones mentioned
above, in which case their values will be replaced.

Modifying headers for the request is not possible. If you'd like to authenticate the requests, you can use a query field
for that purpose, for example:

```
https://antisniper.com/antisniper?key=secret
```

### Response

Open the 'Columns' tab in the menu, and click on the green '+' button

![](/img/docs/overlay/features/session-stats/open-columns.png)

Scroll down and locate the 'Session' family of displayable stats.

![](/img/docs/overlay/features/session-stats/locate-session-stats-columns.png)

You can add any of these stats to the column list and their respective stats will be displayed like normal

![](/img/docs/overlay/features/session-stats/session-stats-example.png)

