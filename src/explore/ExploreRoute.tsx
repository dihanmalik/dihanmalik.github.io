import { lazy } from "react"

const loadExplorePortfolio = () => import("./ExplorePortfolio")
const ExploreRoute = lazy(loadExplorePortfolio)

export default ExploreRoute
