/**
 * A regression graph.
 */
export interface IRegressionGraph {
  /**
   * Y-axis section.
   */
  yAxisSection: number
  /**
   * X-axis section.
   */
  xAxisSection: number
  /**
   * Incline of the regression graph.
   */
  incline: number
  /**
   * Quality of the regression graph.
   */
  quality: number
  /**
   * If this value is set to true the regression graph is "x = xAxisSection".
   * If this value is set to false the regression graph is "y = incline * x + yAxisSection".
   */
  isParallelToXAxis: boolean
}
