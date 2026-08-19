export async function preloadExploreRoute() {
  const [, assets] = await Promise.all([
    import("./ExplorePortfolio"),
    import("./exploreAssets"),
  ])
  await assets.preloadExploreAssets()
}
