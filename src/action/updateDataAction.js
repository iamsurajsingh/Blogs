
import { UPDATE_BLOG } from "../constants/types";

export const updateDataAction = (blog) => ({
    type: UPDATE_BLOG,
    payload: blog,
})
