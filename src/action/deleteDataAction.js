import { DELETE_BLOG } from "../constants/types"

export const deleteDataAction = (id) => {
    return {
        type: DELETE_BLOG,
        payload: id,
    }
}