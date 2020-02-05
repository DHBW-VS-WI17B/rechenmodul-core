import { IRegressionGraph } from '../contracts/IRegressionGraph'

export class RegressionGraph implements IRegressionGraph {
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
