import { ICalc } from "./contracts/ICalc";
import { IPoint } from "./contracts/IPoint";
import { IResult } from "./contracts/IResult";
import { Result } from "./Result";
import { IRegressionGraph } from "./contracts/IRegressionGraph";
import { Point } from "./Point";
import { RegressionGraph } from "./RegressionGraph";

export class Calc implements ICalc {
  Calc(Input: IPoint[]): Promise<IResult> {
    throw new Error("Method not implemented.");
  }
  ValidatePointList(points: IPoint[]): void {
    if (points.length <= 1) {
      throw new Error("Array must contain at least two points");
    }
    if (points.length > 100) {
      throw new Error("Array must contain 100 or less entries");
    }

    let checked: IPoint[] = [];

    points.forEach(point => {
      if (checked.indexOf(point) == -1) {
        checked.push(point);
      }
    });

    if (checked.length > 30) {
      throw new Error("Array must contain 30 or less different values");
    }
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
  GetCovariance(points: IPoint[]): number {
    let oneDimensionalMean = this.GetOneDimensionalMean(points);
    let sum = 0;
    points.forEach(point => {
      sum +=
        (point.x - oneDimensionalMean.x) * (point.y - oneDimensionalMean.y);
    });

    return (1 / (points.length - 1)) * sum;
  }
  GetCorrelationCoefficient(points: IPoint[]): number {
    let covariance = this.GetCovariance(points);
    let variance = this.GetVariance(points);

    let sqrtVariance = Math.sqrt(variance.x * variance.y);

    return covariance / sqrtVariance;
  }
  GetRegressionGraph(points: IPoint[]): IRegressionGraph {
    let graph = new RegressionGraph();

    let covariance = this.GetCovariance(points);
    let variance = this.GetVariance(points);
    let oneDimensionalMean = this.GetOneDimensionalMean(points);

    graph.incline = covariance / variance.x;

    graph.yAxisSection =
      oneDimensionalMean.y - graph.incline * oneDimensionalMean.x;

    graph.quality = Math.pow(this.GetCorrelationCoefficient(points), 2);

    return graph;
  }
}
