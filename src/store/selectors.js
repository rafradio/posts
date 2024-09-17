const selectPosts = state => state.posts;
const selectPost = (state, postId) => state.posts.find(post => post.id === postId);
const selectAllUsers = state => state.users;
const selectUserById = (state, userId) => state.posts.find(user => user.id === userId);

export {selectPosts, selectPost};
export {selectAllUsers, selectUserById};