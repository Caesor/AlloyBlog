import { GET_BLOG_FILE_SUCC, UPDATE_BLOG_FILE } from '../actions/editor'

export const editor = (state={}, action) => {
    switch(action.type) {
        case GET_BLOG_FILE_SUCC:
            return Object.assign({}, state, action.data);
        case UPDATE_BLOG_FILE:
            return Object.assign({}, state, {
                blog: action.data
            });
        default :
            break;
    }
    return state;
}