import test from "tape";
import { doBBB } from "./index.js";

test("doBBB", (t) => {
  const res = doBBB(5);

  t.false(res);

  t.end();
});
