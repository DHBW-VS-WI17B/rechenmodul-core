import { IRegressionGraph } from '../contracts/IRegressionGraph'

export class RegressionGraph implements IRegressionGraph {
  constructor() {
    this.yAxisSection = 0
    this.incline = 0
    this.quality = 0
  }
  yAxisSection: number
  incline: number
  quality: number
}
