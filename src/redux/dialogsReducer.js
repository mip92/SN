const ADD_MESSAGE = "ADD-MESSAGE";
let initialState= {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
        ],
        newMessageText: "",
        dialogs: [
            {
                id: 1,
                name: 'Dimych',
                ava: "http://img1.reactor.cc/pics/post/full/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg"
            },
            {id: 2, name: 'Andrey', ava: "https://klike.net/uploads/posts/2018-06/1528720172_1.jpg"},
            {id: 3, name: 'Sveta', ava: "https://klike.net/uploads/posts/2018-06/1528720227_2.png"},
            {id: 4, name: 'Sasha', ava: "https://klike.net/uploads/posts/2018-06/1528720246_5.jpg"},
            {id: 5, name: 'Viktor', ava: "https://klike.net/uploads/posts/2018-06/1528720305_6.jpg"},
            {id: 6, name: 'Valera', ava: "https://klike.net/uploads/posts/2018-06/1528720257_8.jpg"},
            {
                id: 7,
                name: 'Sergey',
                ava: "https://klike.net/uploads/posts/2020-06/1591514917_7.jpg"
            },
            {
                id: 8,
                name: 'Dimon',
                ava: "https://vjoy.cc/wp-content/uploads/2019/12/screenshot_3-min-13-640x570-1.png"
            },
        ],
    };

export const dialogsReducer=(state=initialState, action)=>{
    //let stateCopy= JSON.parse(JSON.stringify(state))
    switch (action.type){
        case ADD_MESSAGE:{
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: action.text}]
            }
        }
        default: return state;
    }
}

export const addMessageActionCreator = (text) => {
    return {
        type: ADD_MESSAGE,
        text
    }
}