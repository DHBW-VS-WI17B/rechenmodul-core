import { IPoint } from './contracts/IPoint'
import { Point } from './entities/Point'

/**
 * Calculates the one dimensional mean.
 * @param points List of points
 * @returns One dimensional mean
 */
export async function calcOneDimensionalMean(points: IPoint[]): Promise<IPoint> {
  if (points.length < 1) {
    throw new Error('Can not calculate the one dimensional mean for an empty list of points.')
  }

  let sumX = 0
  let sumY = 0

  points.forEach(point => {
    sumX += point.x
    sumY += point.y
  })

  return new Point(sumX / points.length, sumY / points.length)
}
