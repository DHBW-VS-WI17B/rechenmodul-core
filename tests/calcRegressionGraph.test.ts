import { Point } from "../src/entities/Point";
import { calcRegressionGraph } from "../src/calcRegressionGraph";

test("calculates the regression graph for the given list of points", () => {
  let points = [
    new Point(1, 0),
    new Point(1, 0),
    new Point(1, 1),
    new Point(1, 1),
    new Point(1, 1),
    new Point(1, 4),
    new Point(0, 3),
    new Point(0, 3),
    new Point(0, 3),
    new Point(2, 1),
    new Point(2, 1),
    new Point(2, 1),
    new Point(2, 1),
    new Point(2, 1),
    new Point(2, 3),
    new Point(2, 5),
    new Point(2, 5),
    new Point(3, 2),
    new Point(3, 4),
    new Point(3, 4),
    new Point(4, 1),
    new Point(4, 1),
    new Point(4, 3),
    new Point(4, 4),
    new Point(4, 4),
    new Point(5, 0),
    new Point(5, 0),
    new Point(5, 0),
    new Point(5, 1),
    new Point(5, 5)
  ];

  let result = calcRegressionGraph(points);

  expect(result.incline).toBeCloseTo(-0.05938);
  expect(result.quality).toBeCloseTo(0.00043357);
  expect(result.yAxisSection).toBeCloseTo(2.2504302925989674);
});
