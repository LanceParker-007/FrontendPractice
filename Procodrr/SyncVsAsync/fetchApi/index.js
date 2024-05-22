// Get request using fetch
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Post request using fetch
fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "BMW Pencil",
    // other product data
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Fixing callback hell using fetch
fetch("https://dummyjson.com/users")
  .then((res) => res.json)
  .then((usersData) => {
    return fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`);
  })
  .then((res) => res.json)
  .then((postsData) =>
    fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`)
  )
  .then((res) => res.json())
  .then((commentsData) =>
    fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`)
  )
  .then((res) => res.json())
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
