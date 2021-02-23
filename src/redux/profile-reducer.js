let initialState = {
    posts: [{id: 1, message: 'jp'}, {id: 2, message: 'dr'}, {id: 3, message: 'er'}],
    people: [{id: 1, name: 'rom'}, {id: 2, name: 'and'}, {id: 3, name: 'iv'}, {id: 4, name: 'an'}, {id: 5, name: 'mam'}]
}

const profileReducer = (state = initialState, action) => {
    return state
}

export default profileReducer();