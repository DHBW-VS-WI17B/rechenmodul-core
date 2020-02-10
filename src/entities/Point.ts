import { IPoint } from '../contracts/IPoint'

/**
 * An immutable point.
 */
export class Point implements IPoint {
  /**
   * Creates a new instance of an immutable point.
   * @param x Value on the x-axis
   * @param y Value on the y-axis
   */
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  readonly x: number
  readonly y: number
}
