import {ADD_COM_PROF, ADD_COM_DIAL} from "./action";

let init = {
    dialogPage: {
        message : [{id: 1, mess: 'hi'}, {id: 1, mess: 'ya'}, {id: 1, mess: 'kiya'}],
        people: [{id: 1, name: 'rom'}, {id: 2, name: 'and'}, {id: 3, name: 'iv'}, {id: 4, name: 'an'}, {id: 5, name: 'mam'}]
    },
    profilePage: {
        posts: [{id: 1, message: 'jp'}, {id: 2, message: 'dr'}, {id: 3, message: 'er'}]
    }
}

const reducer = (state = init, action) => {
    switch (action.type){
        case ADD_COM_DIAL:
            alert('dialog');
            return state;
        case ADD_COM_PROF:
            alert('profile');
            return state;
    }
}
export default reducer();