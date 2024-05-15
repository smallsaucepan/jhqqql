import test from "tape";
import { doAAA } from "./index.js";

test("doAAA", (t) => {
  const res = doAAA(5);

  t.true(res);

  t.end();
});
