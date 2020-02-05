import { calcCovariance } from '../src/calcCovariance'
import { points } from './utils/testData'
import { Point } from '../src/entities/Point'
import * as fc from 'fast-check'

test('calculates the covariance for the given list of points', async () => {
  expect(await calcCovariance(points)).toBeCloseTo(-0.15862)
})

test('the covariance for equal points is always 0', async () => {
  const pointsZero = [new Point(5, 5), new Point(5, 5), new Point(5, 5), new Point(5, 5)]
  expect(await calcCovariance(pointsZero)).toBe(0)
})

test('the covariance of points where x and y are the same is always greater than or equal to 0', async () => {
  fc.assert(
    fc.asyncProperty(fc.array(fc.integer()), async values => {
      const points = values.map(v => {
        return new Point(v, v)
      })
      if (points.length > 1) {
        const covariance = await calcCovariance(points)
        expect(covariance).toBeGreaterThanOrEqual(0)
      }
    }),
    {
      seed: 4815162342,
    }
  )
})
