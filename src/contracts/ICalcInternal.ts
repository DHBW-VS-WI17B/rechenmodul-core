import { IPoint } from "./IPoint";
import { IRegressionGraph } from "./IRegressionGraph";

/**
 * Icalc internal
 */
export interface ICalcInternal {
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
  GetOneDimensionalMean(points: IPoint[]): number;

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
