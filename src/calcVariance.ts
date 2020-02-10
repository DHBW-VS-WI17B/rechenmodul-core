import { IPoint } from './contracts/IPoint'
import { Point } from './entities/Point'
import { calcOneDimensionalMean } from './calcOneDimensionalMean'

/**
 * Calculates the variance for given list of numbers.
 * @param values List of numbers
 * @param mean Mean for given list of numbers
 */
function calcSingleVariance(values: number[], mean: number): number {
  const sum = values.reduce((sum, value) => {
    return sum + Math.pow(value - mean, 2)
  }, 0)

  return (1 / (values.length - 1)) * sum
}

/**
 * Calculates the variance for given list of points
 * @param points List of points
 * @param oneDimensionalMean One dimensional mean for given points
 * @returns Variance
 */
export async function calcVariance(points: IPoint[], oneDimensionalMean?: IPoint): Promise<IPoint> {
  if (points.length < 2) {
    throw new Error('Can not calculate the variance for a list of one or less points.')
  }
  if (oneDimensionalMean === undefined) {
    oneDimensionalMean = await calcOneDimensionalMean(points)
  }
  const mean: IPoint = oneDimensionalMean

  const varianceX = calcSingleVariance(
    points.map(p => p.x),
    mean.x
  )
  const varianceY = calcSingleVariance(
    points.map(p => p.y),
    mean.y
  )

  return new Point(varianceX, varianceY)
}
