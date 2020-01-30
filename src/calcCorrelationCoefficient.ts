import { IPoint } from "./contracts/IPoint";
import { calcCovariance } from "./calcCovariance";
import { calcVariance } from "./calcVariance";

/**
 * Calculates the correlation coefficient according to Pearson.
 * @param points List of points
 * @returns Correlation coefficient
 */
export async function calcCorrelationCoefficient(
  points: IPoint[]
): Promise<number> {
  const covariance = await calcCovariance(points);
  const variance = await calcVariance(points);

  const sqrtVariance = Math.sqrt(variance.x * variance.y);

  return covariance / sqrtVariance;
}
