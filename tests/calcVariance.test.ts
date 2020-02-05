import { calcVariance } from '../src/calcVariance'
import { points } from './utils/testData'
import * as fc from 'fast-check'

test('calculates the variance for the given list of points', async () => {
  const result = await calcVariance(points)

  expect(result.x).toBeCloseTo(2.67124)
  expect(result.y).toBeCloseTo(2.85172)
})

test('the variance is always at least 0', async () => {
  fc.assert(
    fc.asyncProperty(fc.array(fc.record({ x: fc.integer(), y: fc.integer() })), async points => {
      if (points.length > 1) {
        const variance = await calcVariance(points)
        expect(variance.x).toBeGreaterThanOrEqual(0)
        expect(variance.y).toBeGreaterThanOrEqual(0)
      }
    }),
    {
      seed: 4815162342,
    }
  )
})
