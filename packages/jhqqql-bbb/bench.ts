import Benchmark from "benchmark";
import { doBBB } from "./index.js";

/**
 * Benchmark Results
 */
const suite = new Benchmark.Suite("jhqqql-bbb");
suite
  .add("doBBB", () => doBBB(5))
  .on("cycle", (e: any) => console.log(String(e.target)))
  .run();
