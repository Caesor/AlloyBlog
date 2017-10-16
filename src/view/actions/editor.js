import { CALL_API } from '../middlewares/api'

export const GET_BLOG_FILE_SUCC = 'GET_BLOG_FILE_SUCC';
export const UPDATE_BLOG_FILE = 'UPDATE_BLOG_FILE'

export const get_blog_file = (bid, version) => {
    return {
        [CALL_API]: {
            method: 'GET',
            url: `/blog/${bid}`,
            body: {
                version
            },
            successType: GET_BLOG_FILE_SUCC
        }
    }
}

export const update_blog_file = text => {
    return {
        type: UPDATE_BLOG_FILE,
        data: text
    }
}