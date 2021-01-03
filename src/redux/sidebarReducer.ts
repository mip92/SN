import {letErrorActionType} from "./appReducer";

const ADD_THREE_FRIENDS = "ADD-THREE-FRIENDS";
type FriendsType={
    id: number | null,
    name: string | null,
    ava: string | null,
}
let initialState= {
    friends: [
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
    ]as Array<FriendsType>,
};
export type initialStateType = typeof initialState;

function getRandomArbitrary(min: number, max: number) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

for (let i = initialState.friends.length; i > 3; i--) {
    initialState.friends.splice(getRandomArbitrary(0, initialState.friends.length - 1), 1);
}

export const sidebarReducer = (state=initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_THREE_FRIENDS: {
            return state;
        }
        default: return state;
    }
}
type ActionsTypes =AddThreeFriendsActionCreatorType;

type AddThreeFriendsActionCreatorType = {
    type: typeof ADD_THREE_FRIENDS;
}
export const addThreeFriendsActionCreator = ():AddThreeFriendsActionCreatorType => {
    return {
        type: ADD_THREE_FRIENDS,
    }
}
