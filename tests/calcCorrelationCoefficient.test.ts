import { calcCorrelationCoefficient } from '../src/calcCorrelationCoefficient'
import { points } from './utils/testData'
import { Point } from '../src/entities/Point'
import * as fc from 'fast-check'

test('calculates the correlation coefficient for the given list of points', async () => {
  expect(await calcCorrelationCoefficient(points)).toBeCloseTo(-0.0574704)
})

test('calculates the correlation coefficient for same points', async () => {
  const points0 = [new Point(0, 0), new Point(0, 0)]
  expect(await calcCorrelationCoefficient(points0)).toBe(0)

  const pointsSame = [
    new Point(5, 8),
    new Point(5, 8),
    new Point(5, 8),
    new Point(5, 8),
    new Point(5, 8),
    new Point(5, 8),
    new Point(5, 8),
    new Point(5, 8),
  ]
  expect(await calcCorrelationCoefficient(pointsSame)).toBe(0)
})

test('calculates the correlation coefficient for high correlation points', async () => {
  const pointsHigh = [new Point(0, 0), new Point(1, 1), new Point(2, 2), new Point(3, 3)]
  expect(await calcCorrelationCoefficient(pointsHigh)).toBe(1)
})

test('calculates the correlation coefficient for low correlation points', async () => {
  const pointsLow = [new Point(3, -3), new Point(2, -2), new Point(1, -1), new Point(0, 0)]
  expect(await calcCorrelationCoefficient(pointsLow)).toBe(-1)
})

test('the correlation coefficient is always between -1 and 1, including -1 and 1', async () => {
  fc.assert(
    fc.asyncProperty(
      fc.array(
        fc.record({
          x: fc.integer(),
          y: fc.integer(),
        })
      ),
      async points => {
        if (points.length > 1) {
          const correlationCoefficient = await calcCorrelationCoefficient(points)
          expect(correlationCoefficient).toBeLessThanOrEqual(1)
          expect(correlationCoefficient).toBeGreaterThanOrEqual(-1)
        }
      }
    ),
    {
      seed: 4815162342,
    }
  )
})
