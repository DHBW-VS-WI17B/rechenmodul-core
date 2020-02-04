import { IRegressionGraph } from '../contracts/IRegressionGraph'

export class RegressionGraph implements IRegressionGraph {
  constructor(
    isParallelToXAxis: boolean,
    yAxisSection: number,
    xAxisSection: number,
    incline: number,
    quality: number
  ) {
    this.isParallelToXAxis = isParallelToXAxis
    this.xAxisSection = xAxisSection
    this.yAxisSection = yAxisSection
    this.incline = incline
    this.quality = quality
  }
  readonly isParallelToXAxis: boolean
  readonly yAxisSection: number
  readonly xAxisSection: number
  readonly incline: number
  readonly quality: number
}
