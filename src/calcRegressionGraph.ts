import { IPoint } from "./contracts/IPoint";
import { IRegressionGraph } from "./contracts/IRegressionGraph";
import { RegressionGraph } from "./entities/RegressionGraph";
import { calcCovariance } from "./calcCovariance";
import { calcVariance } from "./calcVariance";
import { calcOneDimensionalMean } from "./calcOneDimensionalMean";
import { calcCorrelationCoefficient } from "./calcCorrelationCoefficient";

/**
 * Calculates the regression graph.
 * @param points List of points
 * @returns Regression graph
 */
export async function calcRegressionGraph(
  points: IPoint[]
): Promise<IRegressionGraph> {
  const graph = new RegressionGraph();

  const covariance = await calcCovariance(points);
  const variance = await calcVariance(points);
  const oneDimensionalMean = await calcOneDimensionalMean(points);

  graph.incline = covariance / variance.x;

  graph.yAxisSection =
    oneDimensionalMean.y - graph.incline * oneDimensionalMean.x;

  graph.quality = Math.pow(await calcCorrelationCoefficient(points), 2);

  return graph;
}
