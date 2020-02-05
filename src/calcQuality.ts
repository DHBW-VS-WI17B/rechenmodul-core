import { calcCorrelationCoefficient } from './calcCorrelationCoefficient'
import { IPoint } from './contracts/IPoint'

/**
 * Calculates the quality of a regression graph.
 * @param points List of points
 */
export async function calcQuality(points: IPoint[]): Promise<number> {
  const correlationCoefficient = await calcCorrelationCoefficient(points)

  return Math.pow(correlationCoefficient, 2)
}
