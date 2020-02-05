import { calcQuality } from '../src/calcQuality'
import * as fc from 'fast-check'

test('the quality value is always between 0 and 1, including 0 and 1', async () => {
  fc.assert(
    fc.asyncProperty(fc.array(fc.record({ x: fc.integer(), y: fc.integer() })), async points => {
      if (points.length > 1) {
        const quality = await calcQuality(points)
        expect(quality).toBeGreaterThanOrEqual(0)
        expect(quality).toBeLessThanOrEqual(1)
      }
    }),
    {
      seed: 4815162342,
    }
  )
})
