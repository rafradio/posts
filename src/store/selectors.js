const selectPosts = state => state.posts;
const selectPost = (state, postId) => state.posts.find(post => post.id === postId);
const selectAllUsers = state => state.users;
const selectUserById = (state, userId) => state.posts.filter(post => post.user == userId);
const selectCurrentUsername = state => state.auth.username;
const selectCurrentUser = state => {
    const currentUsername = selectCurrentUsername(state);
    return selectUserById(state, currentUsername);
}
const selectCurrentAuthor = (state) => {
    let userId = selectCurrentUsername(state);
    // console.log("пользователь после выбора = ", userId);
    return state.users.find(user => user.id == userId)
}

export { selectPosts, selectPost, selectUserById };
export { selectAllUsers, selectCurrentAuthor };
export { selectCurrentUsername, selectCurrentUser };

