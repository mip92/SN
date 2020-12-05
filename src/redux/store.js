import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {profileReducer} from "./profileReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'hi, how are you', likesCount: 1},
                {id: 2, post: 'It`s my first post', likesCount: 2},
            ],
            newPostText: "",
        },
        dialogsPage: {
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
                    ava: "https://funart.pro/uploads/posts/2020-05/1588322095_32-p-nyashnie-foni-na-rabochii-stol-69.png"
                },
                {
                    id: 8,
                    name: 'Dimon',
                    ava: "https://vjoy.cc/wp-content/uploads/2019/12/screenshot_3-min-13-640x570-1.png"
                },
            ],
        },
        sidebar: {
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
        },
    },
   /* sidebar(){
        this._state.sidebar.friends = JSON.parse(JSON.stringify(this._state.dialogsPage.dialogs))
        function getRandomArbitrary(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        }
        for (let i = this._state.sidebar.friends.length; i > 3; i--) {
            this._state.sidebar.friends.splice(getRandomArbitrary(0, this._state.sidebar.friends.length - 1), 1);
        }
    },*/
    _callSubscriber() {
        console.log("state was changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    }
}
//store.sidebar();
export default store;
window.store = store;