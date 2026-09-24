export function getPointerData(event, canvas) {
  const rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    pressure: event.pointerType === "pen" ? event.pressure : 0.5,
    pointerType: event.pointerType,
    tiltX: event.tiltX || 0,
    tiltY: event.tiltY || 0,
  };
}
