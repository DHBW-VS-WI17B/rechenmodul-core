import { Point } from "../src/entities/Point";
import { IPoint } from "../src/contracts/IPoint";
import { validatePointList } from "../src/validatePointList";
import { points } from "./utils/testData";

test("test pointlist for validity", () => {
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
