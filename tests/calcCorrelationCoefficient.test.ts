import { calcCorrelationCoefficient } from '../src/calcCorrelationCoefficient'
import { points } from './utils/testData'
import { Point } from '../src/entities/Point'

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
