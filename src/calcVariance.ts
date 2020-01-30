import { IPoint } from "./contracts/IPoint";
import { Point } from "./entities/Point";
import { calcOneDimensionalMean } from "./calcOneDimensionalMean";

/**
 * Calculates the variance.
 * @param points List of points
 * @returns Variance
 */
export async function calcVariance(points: IPoint[]): Promise<IPoint> {
  let mean = await calcOneDimensionalMean(points);

  let sumX = 0;
  let sumY = 0;
  points.forEach(point => {
    sumX += Math.pow(point.x - mean.x, 2);
    sumY += Math.pow(point.y - mean.y, 2);
  });

  let varianceX = (1 / (points.length - 1)) * sumX;
  let varianceY = (1 / (points.length - 1)) * sumY;

  return new Point(varianceX, varianceY);
}
