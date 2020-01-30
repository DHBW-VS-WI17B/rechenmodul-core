import { Calc } from "../src/Calc";
import { Point } from "../src/Point";

test("gets the one dimensional mean P(2,53333...|2,586206897) for the given list of points", () => {
  let calc = new Calc();

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

  let result = calc.GetOneDimensionalMean(points);

  expect(result.x).toBeCloseTo(2.53333333);
  expect(result.y).toBeCloseTo(2.1);
});

test("gets the variance P(2.67124|2.85172) for the given list of points", () => {
  let calc = new Calc();

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

  let result = calc.GetVariance(points);

  expect(result.x).toBeCloseTo(2.67124);
  expect(result.y).toBeCloseTo(2.85172);
});

test("gets the covariance -0.158620 for the given list of points", () => {
  let calc = new Calc();

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

  let result = calc.GetCovariance(points);

  expect(result).toBeCloseTo(-0.15862);
});

test("gets the correlation coefficient -0.0574704 for the given list of points", () => {
  let calc = new Calc();

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

  let result = calc.GetCorrelationCoefficient(points);

  expect(result).toBeCloseTo(-0.0574704);
});

test("gets the regression graph for the given list of points", () => {
  let calc = new Calc();

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

  let result = calc.GetRegressionGraph(points);

  expect(result.incline).toBeCloseTo(-0.1586206);
  expect(result.quality).toBeCloseTo(0.00043357);
  expect(result.yAxisSection).toBeCloseTo(-0.05938);
});
