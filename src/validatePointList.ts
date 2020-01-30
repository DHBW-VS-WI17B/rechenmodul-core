import { IPoint } from './contracts/IPoint'

/**
 * Validates a list of points. The list should contain between 2 or up to 100 points while there are at most 30 different points in it.
 * @param points List of points
 */
export function validatePointList(points: IPoint[]): void {
  if (points.length <= 1) {
    throw new Error('Array must contain at least two points')
  }
  if (points.length > 100) {
    throw new Error('Array must contain 100 or less entries')
  }

  let checked: IPoint[] = []

  points.forEach(point => {
    if (checked.indexOf(point) == -1) {
      checked.push(point)
    }
  })

  if (checked.length > 30) {
    throw new Error('Array must contain 30 or less different values')
  }
}
