import {SetAuthUserDataType, SetUserSmallPhotoType} from "./authReducer";

const ADD_MESSAGE = "ADD-MESSAGE";
type addMessageActionCreatorType={
    type: typeof ADD_MESSAGE;
    text: string;
}
type MessageType={
    id: number,
    message: string | null,
}
type DialogType={
    id: number | null,
    name: string | null,
    ava: string | null,
}
let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
    ] as Array<MessageType>,
    newMessageText: "" as string,
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            ava: "https://s00.yaplakal.com/pics/pics_original/9/9/2/15045299.jpg"
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
    ]as Array<DialogType>,
};
export type initialStateType = typeof initialState;

export const dialogsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    //let stateCopy= JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: action.text}]
            }
        }
        default:
            return state;
    }
}
type ActionsTypes =addMessageActionCreatorType;

export const addMessageActionCreator = (text: string):addMessageActionCreatorType => {
    return {
        type: ADD_MESSAGE,
        text,
    }
}