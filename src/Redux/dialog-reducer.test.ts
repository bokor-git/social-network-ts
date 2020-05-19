import postsReducer, {addPostThunk, deletePost} from "./posts-reducer";

    // 1. Test data
    let State = {
        postData: [
            {
                id: 1,
                postText: "So, you want to have a really long race that eventually will attract the best runners from around the world. Unlike other races wute totaling somewhere around 24 to 26 miles",
                postLike: 2,
                postAvatar: "https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"
            },
            {
                id: 2,
                postText: "In a nod to Greek history, the first marathon commemorated the run of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C.",
                postLike: 3,
                postAvatar: "https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"
            },
            {
                id: 3,
                postText: "Despite the success of that first race, it took 13 more years of arguing before the International Amateur Athletic Federatio Olympics, there were six different distances.",
                postLike: 6,
                postAvatar: "https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"
            }
        ],
        newPostText: " ",
    };
test('new post should be added', () => {

    // 2. Action

    let action:any = addPostThunk("new post text")
    let newState = postsReducer(State,action)

    // 3. Expectation

   expect(newState.postData.length).toBe(4)
});
test('new post should be deleted', () => {

    // 2. Action

    let action:any = deletePost(1)
    let newState = postsReducer(State,action)
    expect(newState.postData.length).toBe(2)

});




