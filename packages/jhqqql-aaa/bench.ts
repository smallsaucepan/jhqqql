import Benchmark from "benchmark";
import { doAAA } from "./index.js";

/**
 * Benchmark Results
 */
const suite = new Benchmark.Suite("jhqqql-aaa");
suite
  .add("doAAA", () => doAAA(5))
  .on("cycle", (e: any) => console.log(String(e.target)))
  .run();
