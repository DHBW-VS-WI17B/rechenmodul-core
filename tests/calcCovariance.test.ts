import { calcCovariance } from '../src/calcCovariance'
import { points } from './utils/testData'
import { Point } from '../src/entities/Point'

test('calculates the covariance for the given list of points', async () => {
  expect(await calcCovariance(points)).toBeCloseTo(-0.15862)
})

test('calculates the covariance for low correlation set of points', async () => {
  const pointsZero = [new Point(5, 5), new Point(5, 5), new Point(5, 5), new Point(5, 5)]
  expect(await calcCovariance(pointsZero)).toBe(0)
})
