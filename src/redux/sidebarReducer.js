const ADD_THREE_FRIENDS = "ADD-THREE-FRIENDS";
let initialState= {
    friends: [
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
            ava: "https://funart.pro/uploads/posts/2020-05/1588322095_32-p-nyashnie-foni-na-rabochii-stol-69.png"
        },
        {
            id: 8,
            name: 'Dimon',
            ava: "https://vjoy.cc/wp-content/uploads/2019/12/screenshot_3-min-13-640x570-1.png"
        },
    ],
};
function getRandomArbitrary(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

for (let i = initialState.friends.length; i > 3; i--) {
    initialState.friends.splice(getRandomArbitrary(0, initialState.friends.length - 1), 1);
}

export const sidebarReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_THREE_FRIENDS: {
            return state;
        }
        default: return state;
    }
}

export const addThreeFriendsActionCreator = () => {
    return {
        type: ADD_THREE_FRIENDS
    }
}
