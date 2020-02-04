/**
 * A regression graph. If "xAxisSection" is defined the regression graph is "x = xAxisSection", else it is "y = incline * x + yAxisSection".
 */
export interface IRegressionGraph {
  /**
   * Y-axis section.
   */
  yAxisSection: number | undefined
  /**
   * X-axis section.
   */
  xAxisSection: number | undefined
  /**
   * Incline of the regression graph.
   */
  incline: number | undefined
  /**
   * Quality of the regression graph.
   */
  quality: number
}
