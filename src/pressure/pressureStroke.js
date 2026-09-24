import { pressureToSize } from "./pressureMapper";
import { applyPressureCurve } from "./pressureCurve";

export function prepareStroke(points, settings) {
  return points.map((point) => {
    const pressure = applyPressureCurve(
      point.pressure,
      settings.pressureCurve
    );

    const size = pressureToSize(
      pressure,
      settings.minSize,
      settings.maxSize
    );

    return {
      ...point,
      pressure,
      size,
    };
  });
}
