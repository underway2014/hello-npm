import { assert } from "chai";
import {add} from '../src/index'

describe("Index Tests", () => {
      it("should return 5 when 2 is added to 3", () => {
      const result = add(2, 3);
      assert.equal(result, 5);
   });
});