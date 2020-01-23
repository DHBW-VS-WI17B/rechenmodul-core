import { IPoint } from "./IPoint";
import { IRegressionGraph } from "./IRegressionGraph";

export interface IResult {
  oneDimensionalMean: number;
  variance: number;
  covariance: number;
  correlationCoefficient: number;
  regressionGraf: IRegressionGraph;
  points: IPoint[];
}
