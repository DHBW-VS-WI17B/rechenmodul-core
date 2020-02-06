import { calcRegressionGraph } from '../src/calcRegressionGraph'
import { points } from './utils/testData'
import { Point } from '../src/entities/Point'
import * as fc from 'fast-check'

test('calculates the regression graph for the given list of points', async () => {
  const result = await calcRegressionGraph(points)

  expect(result.incline).toBeCloseTo(-0.05938)
  expect(result.quality).toBeCloseTo(0.00043357)
  expect(result.yAxisSection).toBeCloseTo(2.2504302925989674)
  expect(result.xAxisSection).toBe(undefined)
})

test('calculates the regression graph for low correlative points', async () => {
  const pointList = [
    new Point(5, 1),
    new Point(5, 10),
    new Point(5, 9),
    new Point(5, 6),
    new Point(5, 3),
  ]

  const result = await calcRegressionGraph(pointList)

  expect(result.incline).toBe(undefined)
  expect(result.quality).toBe(0)
  expect(result.yAxisSection).toBe(undefined)
  expect(result.xAxisSection).toBe(5)
})

test('calculates the regression graph for low correlative points', async () => {
  const pointList = [
    new Point(5, 3),
    new Point(6, 3),
    new Point(2, 3),
    new Point(3, 3),
    new Point(9, 3),
    new Point(12, 3),
  ]

  const result = await calcRegressionGraph(pointList)

  expect(result.incline).toBe(0)
  expect(result.quality).toBe(0)
  expect(result.yAxisSection).toBe(3)
  expect(result.xAxisSection).toBe(undefined)
})

test('calculates the regression graph for high correlative points', async () => {
  const pointList = []

  for (let i = 0; i < 8; i++) {
    pointList.push(new Point(i, i))
  }

  const result = await calcRegressionGraph(pointList)

  expect(result.incline).toBe(1)
  expect(result.quality).toBe(1)
  expect(result.yAxisSection).toBe(0)
  expect(result.xAxisSection).toBe(undefined)
})

test('calculates the regression graph for negative correlative points', async () => {
  const pointList = []

  for (let i = 0; i < 8; i++) {
    pointList.push(new Point(i, -1 * i))
  }

  const result = await calcRegressionGraph(pointList)

  expect(result.incline).toBe(-1)
  expect(result.quality).toBe(1)
  expect(result.yAxisSection).toBe(0)
  expect(result.xAxisSection).toBe(undefined)
})

test('calculates the regression graph for points with negativ values', async () => {
  const pointList = [
    new Point(1, -1),
    new Point(5, 2),
    new Point(2, 3),
    new Point(8, 4),
    new Point(-2, 1),
  ]

  const result = await calcRegressionGraph(pointList)

  expect(result.incline).toBeCloseTo(0.33673469)
  expect(result.quality).toBeCloseTo(0.450496414)
  expect(result.yAxisSection).toBeCloseTo(0.857142857)
  expect(result.xAxisSection).toBe(undefined)
})

test('if all points share the same x value the graph is of type x = xAxisSection', async () => {
  fc.assert(
    fc.asyncProperty(fc.array(fc.integer()), fc.integer(), async (yValues, xValue) => {
      if (yValues.length > 1) {
        const points = yValues.map(yValue => {
          return new Point(xValue, yValue)
        })
        const regressionGraph = await calcRegressionGraph(points)
        expect(regressionGraph.xAxisSection).toBe(xValue)
        expect(regressionGraph.incline).toBeUndefined()
        expect(regressionGraph.yAxisSection).toBeUndefined()
      }
    })
  )
})

test('calculates the regression graph connecting 2 points', async () => {
  const pointList = [new Point(1, 1), new Point(5, 2)]

  const result = await calcRegressionGraph(pointList)

  expect(result.incline).toBeCloseTo(0.25)
  expect(result.quality).toBeCloseTo(1)
  expect(result.yAxisSection).toBeCloseTo(0.75)
  expect(result.xAxisSection).toBe(undefined)
})
