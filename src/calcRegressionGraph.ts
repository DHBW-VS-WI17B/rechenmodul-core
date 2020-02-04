import { IPoint } from './contracts/IPoint'
import { IRegressionGraph } from './contracts/IRegressionGraph'
import { RegressionGraph } from './entities/RegressionGraph'
import { calcCovariance } from './calcCovariance'
import { calcVariance } from './calcVariance'
import { calcOneDimensionalMean } from './calcOneDimensionalMean'
import { calcCorrelationCoefficient } from './calcCorrelationCoefficient'

/**
 * Calculates the regression graph.
 * @param points List of points
 * @returns Regression graph
 */
export async function calcRegressionGraph(points: IPoint[]): Promise<IRegressionGraph> {
  const covariance = await calcCovariance(points)
  const variance = await calcVariance(points)
  const oneDimensionalMean = await calcOneDimensionalMean(points)

  let incline = 0
  let xAxisSection = 0
  let yAxisSection = 0
  let isParallelToXAxis = false
  if (variance.x != 0) {
    incline = covariance / variance.x
    yAxisSection = oneDimensionalMean.y - incline * oneDimensionalMean.x
  } else {
    xAxisSection = points[0].x
    isParallelToXAxis = true
  }

  const quality = Math.pow(await calcCorrelationCoefficient(points), 2)

  return new RegressionGraph(isParallelToXAxis, yAxisSection, xAxisSection, incline, quality)
}
