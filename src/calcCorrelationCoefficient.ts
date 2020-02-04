import { IPoint } from './contracts/IPoint'
import { calcCovariance } from './calcCovariance'
import { calcVariance } from './calcVariance'

/**
 * Calculates the correlation coefficient according to Pearson.
 * @param points List of points
 * @returns Correlation coefficient
 */
export async function calcCorrelationCoefficient(points: IPoint[]): Promise<number> {
  const covariance = await calcCovariance(points)
  const variance = await calcVariance(points)

  const sqrtVarianceXY = Math.sqrt(variance.x * variance.y)

  if (sqrtVarianceXY == 0) {
    return 0
  }

  return covariance / sqrtVarianceXY
}
