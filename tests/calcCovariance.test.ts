import { Point } from "../src/entities/Point";
import { calcCovariance } from "../src/calcCovariance";

test("calculates the covariance for the given list of points", () => {
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

  expect(calcCovariance(points)).toBeCloseTo(-0.15862);
});
