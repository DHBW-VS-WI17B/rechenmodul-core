import { calcRegressionGraph } from '../src/calcRegressionGraph'
import { points } from './utils/testData'

test('calculates the regression graph for the given list of points', async () => {
  let result = await calcRegressionGraph(points)

  expect(result.incline).toBeCloseTo(-0.05938)
  expect(result.quality).toBeCloseTo(0.00043357)
  expect(result.yAxisSection).toBeCloseTo(2.2504302925989674)
})
