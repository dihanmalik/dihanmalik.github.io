# Pixel zombie game

The game is fully client-side. Its registration form writes every player to the
shared MobX store in `zombieGameStore.ts`. Each player receives a generated
`player-<uuid>` ID.

The player list persists between visits in the browser's `localStorage` under
`field-manual-zombie-players-v1`. No player information is sent over the
network or persisted to a remote database. Clearing the site's browser storage
removes the player list.

Run the portfolio normally:

```sh
pnpm dev
```
