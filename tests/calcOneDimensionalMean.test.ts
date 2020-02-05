import { calcOneDimensionalMean } from '../src/calcOneDimensionalMean'
import { points } from './utils/testData'
import * as fc from 'fast-check'
import { IPoint } from '../src/contracts/IPoint'

test('calculates the one dimensional mean for the given list of points', async () => {
  const result = await calcOneDimensionalMean(points)

  expect(result.x).toBeCloseTo(2.53333333)
  expect(result.y).toBe(2.1)
})

const isValidOneDimensionalMean = (points: IPoint[], mean: IPoint): boolean => {
  const maxX = Math.max(...points.map(p => p.x), 0)
  const minX = Math.min(...points.map(p => p.x), 0)
  const maxY = Math.max(...points.map(p => p.y), 0)
  const minY = Math.min(...points.map(p => p.y), 0)

  if (mean.x >= minX && mean.x <= maxX && mean.y >= minY && mean.y <= maxY) return true
  return false
}

test('the one dimensional mean is never higher or lower than the extremes of the point array (integers)', async () => {
  fc.assert(
    fc.asyncProperty(fc.array(fc.record({ x: fc.integer(), y: fc.integer() })), async points => {
      if (points.length > 0) {
        const oneDimensionalMean = await calcOneDimensionalMean(points)
        expect(isValidOneDimensionalMean(points, oneDimensionalMean)).toBe(true)
      }
    }),
    {
      seed: 4815162342,
    }
  )
})

test('the one dimensional mean is never higher or lower than the extremes of the point array (floats)', async () => {
  fc.assert(
    fc.asyncProperty(fc.array(fc.record({ x: fc.float(), y: fc.float() })), async points => {
      if (points.length > 0) {
        const oneDimensionalMean = await calcOneDimensionalMean(points)
        expect(isValidOneDimensionalMean(points, oneDimensionalMean)).toBe(true)
      }
    }),
    {
      seed: 4815162342,
    }
  )
})
