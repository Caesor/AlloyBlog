import { CALL_API } from '../middlewares/api'

export const GET_BLOG_LIST_SUCC = 'GET_BLOG_LIST_SUCC';

export const get_blog_list = () => {
    return {
        [CALL_API]: {
            method: 'GET',
            url: '/bloglist',
            successType: GET_BLOG_LIST_SUCC
        }
    }
}