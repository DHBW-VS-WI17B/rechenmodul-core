import { IRegressionGraph } from '../contracts/IRegressionGraph'

/**
 * A immutable regression graph.
 */
export class RegressionGraph implements IRegressionGraph {
  /**
   * Creates new instance of an immutable regression graph.
   * @param yAxisSection Y-axis section
   * @param xAxisSection X-axis section
   * @param incline Incline of the regression graph
   * @param quality Quality of the regression graph
   */
  constructor(
    yAxisSection: number | undefined,
    xAxisSection: number | undefined,
    incline: number | undefined,
    quality: number
  ) {
    this.xAxisSection = xAxisSection
    this.yAxisSection = yAxisSection
    this.incline = incline
    this.quality = quality
  }
  readonly yAxisSection: number | undefined
  readonly xAxisSection: number | undefined
  readonly incline: number | undefined
  readonly quality: number
}
