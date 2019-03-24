export interface actionCreatorT {
  type: string,
  payload?: any
}

const actionCreator = (type: string, payload: any): actionCreatorT => {
  return {type, ...payload}
};

export {actionCreator}
