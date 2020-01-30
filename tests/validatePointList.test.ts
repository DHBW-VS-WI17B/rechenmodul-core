import { Point } from "../src/entities/Point";
import { IPoint } from "../src/contracts/IPoint";
import { validatePointList } from "../src/validatePointList";

test("test pointlist for validity", () => {
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

  expect(() => {
    validatePointList(points);
  }).not.toThrowError();

  expect(() => {
    validatePointList([]);
  }).toThrowError("Array must contain at least two points");

  let pointsLengthTest: IPoint[] = [];

  for (let i = 0; i < 100; i++) {
    pointsLengthTest.push(new Point(10, 10));
  }

  expect(() => {
    validatePointList(pointsLengthTest);
  }).toThrowError("Array must contain 30 or less different values");

  pointsLengthTest.push(new Point(10, 10));

  expect(() => {
    validatePointList(pointsLengthTest);
  }).toThrowError("Array must contain 100 or less entries");
});
