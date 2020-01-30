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
  let covariance = await calcCovariance(points);
  let variance = await calcVariance(points);

  let sqrtVariance = Math.sqrt(variance.x * variance.y);

  return covariance / sqrtVariance;
}
