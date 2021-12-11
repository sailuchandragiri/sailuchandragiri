

import { INC_COUNT, DEC_COUNT } from "./actionType";

export const incCounter = (payload) => {
  return {
    type: INC_COUNT,
    payload
  };
};

export const decCounter = (payload) => {
  return {
    type: DEC_COUNT,
    payload
  };
};
