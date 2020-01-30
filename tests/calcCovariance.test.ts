import { calcCovariance } from "../src/calcCovariance";
import { points } from "./utils/testData";

test("calculates the covariance for the given list of points", async () => {
  expect(await calcCovariance(points)).toBeCloseTo(-0.15862);
});
