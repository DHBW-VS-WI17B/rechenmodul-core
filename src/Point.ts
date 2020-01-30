import { IPoint } from "./contracts/IPoint";

export class Point implements IPoint {
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  x: number;
  y: number;
}
