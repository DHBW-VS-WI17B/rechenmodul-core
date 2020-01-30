import { ICalc } from "./contracts/ICalc";
import { IPoint } from "./contracts/IPoint";
import { IResult } from "./contracts/IResult";
import { Result } from "./Result";
import { IRegressionGraph } from "./contracts/IRegressionGraph";
import { Point } from "./Point";

export class Calc implements ICalc {
  Calc(Input: IPoint[]): Promise<IResult> {
    throw new Error("Method not implemented.");
  }
  ValidatePointList(points: IPoint[]): void {
    throw new Error("Method not implemented.");
  }
  GetOneDimensionalMean(points: IPoint[]): IPoint {
    let sumX = 0;
    let sumY = 0;

    points.forEach(point => {
      sumX += point.x;
      sumY += point.y;
    });

    return new Point(sumX / points.length, sumY / points.length);
  }
  GetVariance(points: IPoint[]): IPoint {
    let oneDimensionalMean = this.GetOneDimensionalMean(points);

    let sumX = 0;
    let sumY = 0;
    points.forEach(point => {
      sumX += Math.pow(point.x - oneDimensionalMean.x, 2);
      sumY += Math.pow(point.y - oneDimensionalMean.y, 2);
    });

    let varianceX = (1 / (points.length - 1)) * sumX;
    let varianceY = (1 / (points.length - 1)) * sumY;

    return new Point(varianceX, varianceY);
  }
  GetCovariance(points: IPoint[]): IPoint {
    throw new Error("Method not implemented.");
  }
  GetCorrelationCoefficient(points: IPoint[]): number {
    throw new Error("Method not implemented.");
  }
  GetRegressionGraph(points: IPoint[]): IRegressionGraph {
    throw new Error("Method not implemented.");
  }
}
