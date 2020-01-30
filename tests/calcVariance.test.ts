import { calcVariance } from "../src/calcVariance";
import { points } from "./utils/testData";

test("calculates the variance for the given list of points", async () => {
  let result = await calcVariance(points);

  expect(result.x).toBeCloseTo(2.67124);
  expect(result.y).toBeCloseTo(2.85172);
});
