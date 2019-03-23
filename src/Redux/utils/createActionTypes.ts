const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

interface ActionTypes {
  REQUEST: string,
  SUCCESS: string,
  FAILURE: string
}

const createActionTypes = (base: string): ActionTypes => {
  const types: ActionTypes =  [REQUEST, SUCCESS, FAILURE].reduce((acc: any, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
  return types;
};

export {createActionTypes, FAILURE, SUCCESS, REQUEST};
