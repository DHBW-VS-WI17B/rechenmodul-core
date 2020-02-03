import { calcOneDimensionalMean } from '../src/calcOneDimensionalMean'
import { points } from './utils/testData'

test('calculates the one dimensional mean for the given list of points', async () => {
  let result = await calcOneDimensionalMean(points)

  expect(result.x).toBeCloseTo(2.53333333)
  expect(result.y).toBe(2.1)
})
