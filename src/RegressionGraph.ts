import { IRegressionGraph } from "./contracts/IRegressionGraph";

export class RegressionGraph implements IRegressionGraph {
  constructor() {
    this.xAxisSection = 0;
    this.incline = 0;
    this.quality = 0;
  }
  xAxisSection: number;
  incline: number;
  quality: number;
}
