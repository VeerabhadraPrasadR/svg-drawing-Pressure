export function pressureToSize(pressure, minSize, maxSize) {
  return minSize + pressure * (maxSize - minSize);
}
