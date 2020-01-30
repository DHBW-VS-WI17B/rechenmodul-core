import { Point } from "../src/entities/Point";
import { calcOneDimensionalMean } from "../src/calcOneDimensionalMean";

test("calculates the one dimensional mean for the given list of points", () => {
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

  let result = calcOneDimensionalMean(points);

  expect(result.x).toBeCloseTo(2.53333333);
  expect(result.y).toBe(2.1);
});
