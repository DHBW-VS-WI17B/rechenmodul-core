import { IPoint } from "./contracts/IPoint";

export class Point implements IPoint {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  x: number;
  y: number;
}
