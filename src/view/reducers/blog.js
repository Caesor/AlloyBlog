import { GET_BLOG_CONTENT_SUCC } from '../actions/blog'

let initState ={
    title: '',
    content: '',
    tags: '',
    categories: '',
    time: ''
}

const blog = (state=initState, action) => {
    switch(action.type) {
        case GET_BLOG_CONTENT_SUCC:
            return Object.assign({}, state, action.data.blog)
        default:
            break;
    }
    return state;
}

export default blog;