interface Result {
  rbc: number;
  wbc: number;
  pletelets: number;
}

export default interface Data {
  name: string;
  result: Result;
}
