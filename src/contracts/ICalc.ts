import { IPoint } from "./IPoint";
import { IResult } from "./IResult";

export interface ICalc {
  /**
   * Calculates like a fucking genius
   * @param Input List of points
   * @returns calc Some mathemathical shit
   */
  Calc(Input: IPoint[]): Promise<IResult>;

  /**
   *
   * @param points Points to validate
   */
  ValidatePointList(points: IPoint[]): void;

  /**
   *
   * @param points List of points to calculate the one dimensional mean for
   * @returns one dimensional mean
   */
  GetOneDimensionalMean(points: IPoint[]): IPoint;

  /**
   *
   * @param points List of points to calculcate the variance for
   * @returns variance
   */
  GetVariance(points: IPoint[]): number;

  /**
   *
   * @param points List of points to calculcate the covariance according to pearson algorythm for
   * @returns covariance
   */
  GetCovariance(points: IPoint[]): number;

  /**
   *
   * @param points List of points to calculcate the correlation coefficient for
   * @returns correlation coefficient
   */
  GetCorrelationCoefficient(points: IPoint[]): number;

  /**
   *
   * @param points List of points to calculcate the regression graph for
   * @returns regression graph
   */
  GetRegressionGraph(points: IPoint[]): IRegressionGraph;
}
