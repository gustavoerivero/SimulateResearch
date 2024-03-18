import { TQueue } from "../types/CalculatorValues.Type";

export interface ISimulationResult {
  time: number;
  servedCustomers: number;
  totalWaitTime: number;
  queue: TQueue;
};