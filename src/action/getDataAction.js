import { GET_BLOG } from "../constants/types"

export const getDataAction = (id) => ({
    type: GET_BLOG,
    payload: id,
});
