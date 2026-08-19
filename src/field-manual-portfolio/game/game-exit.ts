export const ARCADE_EXIT_REQUEST_EVENT = "portfolio-arcade-exit-request"

export function requestArcadeExit() {
  const event = new Event(ARCADE_EXIT_REQUEST_EVENT, { cancelable: true })
  const canLeaveImmediately = window.dispatchEvent(event)

  if (canLeaveImmediately) window.location.assign("/#game")
}

export function returnToPortfolioArcade() {
  window.location.assign("/#game")
}
