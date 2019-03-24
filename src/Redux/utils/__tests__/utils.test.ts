import {actionCreator, createActionTypes} from "../"

describe("redux utils", () => {
  it("should return type and payload", () => {
    expect(actionCreator("test", {p: "1"})).toEqual({p: "1", type: "test"})
  })
  it("should create action types, REQUEST, FAILURE, SUCCESS", () => {
    expect(createActionTypes("test")).toEqual({
      "FAILURE": "test_FAILURE",
      "REQUEST": "test_REQUEST",
      "SUCCESS": "test_SUCCESS"
    })
  })
});
