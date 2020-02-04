import { IPoint } from './contracts/IPoint'
import { IRegressionGraph } from './contracts/IRegressionGraph'
import { RegressionGraph } from './entities/RegressionGraph'
import { calcCovariance } from './calcCovariance'
import { calcVariance } from './calcVariance'
import { calcOneDimensionalMean } from './calcOneDimensionalMean'
import { calcCorrelationCoefficient } from './calcCorrelationCoefficient'

async function calcQuality(points: IPoint[]): Promise<number> {
  const correlationCoefficient = await calcCorrelationCoefficient(points)

  return Math.pow(correlationCoefficient, 2)
}

/**
 * Calculates the regression graph.
 * @param points List of points
 * @returns Regression graph
 */
export async function calcRegressionGraph(points: IPoint[]): Promise<IRegressionGraph> {
  const covariance = await calcCovariance(points)
  const variance = await calcVariance(points)
  const oneDimensionalMean = await calcOneDimensionalMean(points)

  let incline = undefined
  let xAxisSection = undefined
  let yAxisSection = undefined
  if (variance.x != 0) {
    incline = covariance / variance.x
    yAxisSection = oneDimensionalMean.y - incline * oneDimensionalMean.x
  } else {
    xAxisSection = points[0].x
  }

  const quality = await calcQuality(points)

  return new RegressionGraph(yAxisSection, xAxisSection, incline, quality)
}
