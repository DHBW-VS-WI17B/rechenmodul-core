import { IPoint } from './contracts/IPoint'
import { IRegressionGraph } from './contracts/IRegressionGraph'
import { RegressionGraph } from './entities/RegressionGraph'
import { calcCovariance } from './calcCovariance'
import { calcVariance } from './calcVariance'
import { calcOneDimensionalMean } from './calcOneDimensionalMean'
import { calcQuality } from './calcQuality'

/**
 * Calculates the regression graph.
 * @param points List of points
 * @returns Regression graph
 */
export async function calcRegressionGraph(
  points: IPoint[],
  variance?: IPoint,
  covariance?: number,
  oneDimensionalMean?: IPoint,
  quality?: number
): Promise<IRegressionGraph> {
  if (variance === undefined) {
    variance = await calcVariance(points)
  }
  if (covariance === undefined) {
    covariance = await calcCovariance(points)
  }
  if (oneDimensionalMean === undefined) {
    oneDimensionalMean = await calcOneDimensionalMean(points)
  }
  if (quality === undefined) {
    quality = await calcQuality(points)
  }

  let incline = undefined
  let xAxisSection = undefined
  let yAxisSection = undefined
  if (variance.x != 0) {
    incline = covariance / variance.x
    yAxisSection = oneDimensionalMean.y - incline * oneDimensionalMean.x
  } else {
    xAxisSection = points[0].x
  }

  return new RegressionGraph(yAxisSection, xAxisSection, incline, quality)
}
