import {rendereEntireTree} from './../index'

let state = {
    profilePage: {
        posts: [{id: 1, message: 'jp'}, {id: 2, message: 'dr'}, {id: 3, message: 'er'}]
    },
    dialogPage: {
        dialog: [{id: 1, mess: 'hi'}, {id: 1, mess: 'ya'}, {id: 1, mess: 'kiya'}],
        people: [{id: 1, name: 'rom'}, {id: 2, name: 'and'}, {id: 3, name: 'iv'}, {id: 4, name: 'an'}, {id: 5, name: 'mam'}]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage
    }
    state.profilePage.posts.push(newPost);
    rendereEntireTree(state);
}

export default state;