import { ICalc } from "./contracts/ICalc";
import { IPoint } from "./contracts/IPoint";
import { IResult } from "./contracts/IResult";
import { Result } from "./Result";

export class CalcTest implements ICalc {
  Calc(Input: IPoint[]): Promise<IResult> {
    throw new Error("Method not implemented.");
  }
}
