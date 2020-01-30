import { IResult } from "./contracts/IResult";
import { IPoint } from "./contracts/IPoint";
import { IRegressionGraph } from "./contracts/IRegressionGraph";
import { RegressionGraph } from "./RegressionGraph";

export class Result implements IResult {
  constructor() {
    this.oneDimensionalMean = 0;
    this.variance = 0;
    this.covariance = 0;
    this.correlationCoefficient = 0;
    this.regressionGraph = new RegressionGraph();
    this.points = [];
  }
  oneDimensionalMean: number;
  variance: number;
  covariance: number;
  correlationCoefficient: number;
  regressionGraph: IRegressionGraph;
  points: IPoint[];
}
