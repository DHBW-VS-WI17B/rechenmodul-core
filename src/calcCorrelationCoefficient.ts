import { IPoint } from './contracts/IPoint'
import { calcCovariance } from './calcCovariance'
import { calcVariance } from './calcVariance'

/**
 * Calculates the correlation coefficient according to Pearson.
 * @param points List of points
 * @param variance Variance for given list of points
 * @param covariance Covariance for given list of points
 * @returns Correlation coefficient
 */
export async function calcCorrelationCoefficient(
  points: IPoint[],
  variance?: IPoint,
  covariance?: number
): Promise<number> {
  if (variance === undefined) {
    variance = await calcVariance(points)
  }
  if (covariance === undefined) {
    covariance = await calcCovariance(points)
  }

  const sqrtVarianceXY = Math.sqrt(variance.x * variance.y)

  if (sqrtVarianceXY == 0) return 0

  const correlationCoefficient = covariance / sqrtVarianceXY

  // floating point bug fixes. e.g.: [[{"x":5699641,"y":-746797428},{"x":6,"y":522707547}]] results in -1.0000000000000002
  if (correlationCoefficient > 1) return 1
  if (correlationCoefficient < -1) return -1

  return correlationCoefficient
}
