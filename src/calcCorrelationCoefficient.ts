import { IPoint } from "./contracts/IPoint";
import { calcCovariance } from "./calcCovariance";
import { calcVariance } from "./calcVariance";

/**
 * Calculates the correlation coefficient according to Pearson.
 * @param points List of points
 * @returns Correlation coefficient
 */
export function calcCorrelationCoefficient(points: IPoint[]): number {
  let covariance = calcCovariance(points);
  let variance = calcVariance(points);

  let sqrtVariance = Math.sqrt(variance.x * variance.y);

  return covariance / sqrtVariance;
}
