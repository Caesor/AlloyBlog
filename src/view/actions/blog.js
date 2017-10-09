import { CALL_API } from '../middlewares/api'

export const GET_BLOG_CONTENT_SUCC = 'GET_BLOG_CONTENT_SUCC';

export const get_blog_content = bid => {
    return {
        [CALL_API]: {
            method: 'GET',
            url: `/blog/${bid}`,
            successType: GET_BLOG_CONTENT_SUCC
        }
    }
}