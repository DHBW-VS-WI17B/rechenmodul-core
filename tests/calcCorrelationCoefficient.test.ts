import { calcCorrelationCoefficient } from "../src/calcCorrelationCoefficient";
import { points } from "./utils/testData";

test("calculates the correlation coefficient for the given list of points", async () => {
  expect(await calcCorrelationCoefficient(points)).toBeCloseTo(-0.0574704);
});
