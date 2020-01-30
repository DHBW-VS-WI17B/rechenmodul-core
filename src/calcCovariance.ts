import { IPoint } from "./contracts/IPoint";
import { calcOneDimensionalMean } from "./calcOneDimensionalMean";

/**
 * Calculates the covariance.
 * @param points List of points
 * @returns Covariance
 */
export function calcCovariance(points: IPoint[]): number {
  let mean = calcOneDimensionalMean(points);
  let sum = 0;
  points.forEach(point => {
    sum += (point.x - mean.x) * (point.y - mean.y);
  });

  return (1 / (points.length - 1)) * sum;
}
