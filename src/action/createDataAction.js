import { CREATE_BLOG } from "../constants/types";

export const createDataAction = (data) => {
  return {
    type: CREATE_BLOG,
    data: data
  };
}
