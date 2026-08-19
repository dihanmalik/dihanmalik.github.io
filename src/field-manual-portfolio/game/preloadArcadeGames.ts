let arcadeGamePreload: Promise<unknown> | null = null

export function preloadArcadeGames() {
  arcadeGamePreload ??= Promise.all([
    import("./SpaceShooterGame"),
    import("./ZombieBatGame"),
  ])
  return arcadeGamePreload
}
