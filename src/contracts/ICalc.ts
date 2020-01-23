import { IPoint } from "./IPoint";
import { IResult } from "./IResult";

export interface ICalc {
  /**
   * Calculates like a fucking genius
   * @param Input List of points
   * @returns calc Some mathemathical shit
   */
  Calc(Input: IPoint[]): Promise<IResult>;
}
