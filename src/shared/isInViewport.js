// TODO Needs testing
export const isInViewport = (state, isInViewportElements, offset = 50) => {
  let updatedState = { ...state.isInViewport }
  Object.keys(isInViewportElements).forEach(key => {
    if (!isInViewportElements[key].current) { return }
    if (window.scrollY > isInViewportElements[key].current.offsetTop + offset) {
      updatedState = {
        ...updatedState,
        [key]: true
      }
    }
  })
  return updatedState
}
