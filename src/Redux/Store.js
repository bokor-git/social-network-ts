import postsReducer from "./posts-reducer";
import dialogReducer from "./dialog-reducer";


let store = {
    _state: {
        postPage: {
            postData: [
                {
                    postText: "So, you want to have a really long race that eventually will attract the best runners from around the world. Unlike other races wute totaling somewhere around 24 to 26 miles",
                    postLike: "3",
                    postAvatar: "https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png"
                },
                {
                    postText: "In a nod to Greek history, the first marathon commemorated the run of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C.",
                    postLike: "6",
                    postAvatar: "https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png"
                },
                {
                    postText: "Despite the success of that first race, it took 13 more years of arguing before the International Amateur Athletic Federatio Olympics, there were six different distances.",
                    postLike: "9",
                    postAvatar: "https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png"
                }
            ],
            newPostText: "it-Kamasutra"
        },
        profilePage: {
            massageData: [
                {id: 1, text: "Yo, get up"},
                {id: 2, text: "How are you"},
                {id: 3, text: "Yo, get up"}],
            dialogsData: [
                {id: 1, name: "Bohdan"},
                {id: 2, name: "Florian"},
                {id: 3, name: "Robert"}],
            newMassageBody: []
        },
        eventData: [
            {id: 1, text: "Sumy Duathlon 27.5", poster: "https://sportevent.com.ua/image/t/250/250/img/1568/656.jpg"},
            {
                id: 1,
                text: "Blue Lake Cup Spring 2020",
                poster: "https://sportevent.com.ua/image/t/250/250/img/1574/662.png"
            },
            {
                id: 1,
                text: "Kharkiv Half Marathon 2020",
                poster: "https://sportevent.com.ua/image/t/250/250/img/1464/630.jpg"
            },
            {
                id: 1,
                text: "4th RAIN Mohrytsia Eco Trail 2020",
                poster: "https://sportevent.com.ua/image/t/250/250/img/1568/656.jpg"
            },
            {id: 1, text: "TRIATMAN IRON 2020"}
        ]
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("state change")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.postPage = postsReducer(this._state.postPage, action)
        this._state.profilePage = dialogReducer(this._state.profilePage, action)
        this._callSubscriber(this._state);
    }
}





window.store = store
export default store