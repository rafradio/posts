const selectPosts = state => state.posts;
const selectPost = (state, postId) => state.posts.find(post => post.id === postId);
const selectAllUsers = state => state.users;
const selectUserById = (state, userId) => state.posts.filter(post => post.user == userId.toString());
const selectCurrentUsername = state => state.auth.username;
const selectCurrentUser = state => {
    const currentUsername = selectCurrentUsername(state);
    return selectUserById(state, currentUsername);
}
const selectCurrentAuthor = (state, userId) => state.users.find(user => user.id == userId)

export { selectPosts, selectPost, selectUserById };
export { selectAllUsers, selectCurrentAuthor };
export { selectCurrentUsername, selectCurrentUser };

