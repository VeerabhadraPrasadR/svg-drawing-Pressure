export function isPen(event) {
  return event.pointerType === "pen";
}

export function getDeviceType(event) {
  if (event.pointerType === "pen") {
    return "stylus";
  }

  if (event.pointerType === "touch") {
    return "touch";
  }

  return "mouse";
}
