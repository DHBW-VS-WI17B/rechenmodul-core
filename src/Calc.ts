import { ICalc } from "./contracts/ICalc";
import { IPoint } from "./contracts/IPoint";
import { IResult } from "./contracts/IResult";
import { Result } from "./Result";
import { IRegressionGraph } from "./contracts/IRegressionGraph";

export class Calc implements ICalc {
  Calc(Input: IPoint[]): Promise<IResult> {
    throw new Error("Method not implemented.");
  }
  ValidatePointList(points: IPoint[]): void {
    throw new Error("Method not implemented.");
  }
  GetOneDimensionalMean(points: IPoint[]): IPoint {
    throw new Error("Method not implemented.");
  }
  GetVariance(points: IPoint[]): number {
    throw new Error("Method not implemented.");
  }
  GetCovariance(points: IPoint[]): number {
    throw new Error("Method not implemented.");
  }
  GetCorrelationCoefficient(points: IPoint[]): number {
    throw new Error("Method not implemented.");
  }
  GetRegressionGraph(points: IPoint[]): IRegressionGraph {
    throw new Error("Method not implemented.");
  }
}
