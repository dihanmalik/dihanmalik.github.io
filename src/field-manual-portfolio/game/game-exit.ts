export const ARCADE_EXIT_REQUEST_EVENT = "portfolio-arcade-exit-request"
export const ARCADE_RETURN_SCROLL_KEY = "portfolio-arcade-return-scroll"

export function requestArcadeExit() {
  const event = new Event(ARCADE_EXIT_REQUEST_EVENT, { cancelable: true })
  const canLeaveImmediately = window.dispatchEvent(event)

  if (canLeaveImmediately) returnToPortfolioArcade()
}

export function returnToPortfolioArcade() {
  sessionStorage.setItem(ARCADE_RETURN_SCROLL_KEY, "true")
  window.location.assign("/#game")
}
