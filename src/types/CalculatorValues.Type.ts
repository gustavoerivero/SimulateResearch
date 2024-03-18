export type TCalculatorValue = string | number | null;

export type TCalculatorValues = {
  lambda: TCalculatorValue;
  mu: TCalculatorValue;
  maxQueueSize: TCalculatorValue;
};

export type TQueue = {
  arrivalTime: number;
  serviceTime: number;
}[];

export type TSimulationTable = {
  id: number;
  time: number;
  queue: number;
  customers: number;
  waitTime: number;
}[];