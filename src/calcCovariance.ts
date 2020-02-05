import { IPoint } from './contracts/IPoint'
import { calcOneDimensionalMean } from './calcOneDimensionalMean'

/**
 * Calculates the covariance.
 * @param points List of points
 * @param oneDimensionalMean One dimensional mean for given points
 * @returns Covariance
 */
export async function calcCovariance(
  points: IPoint[],
  oneDimensionalMean?: IPoint
): Promise<number> {
  if (points.length < 2) {
    throw new Error('Can not calculate the covariance for a list of one or less points.')
  }
  if (oneDimensionalMean === undefined) {
    oneDimensionalMean = await calcOneDimensionalMean(points)
  }

  const mean: IPoint = oneDimensionalMean

  const sum = points.reduce((sum, point) => {
    return sum + (point.x - mean.x) * (point.y - mean.y)
  }, 0)

  return (1 / (points.length - 1)) * sum
}
