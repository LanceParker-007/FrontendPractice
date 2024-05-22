const makeHttpRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  const promise = new Promise((res, rej) => {
    xhr.addEventListener("load", () => {
      res(xhr.response);
    });

    xhr.addEventListener("error", () => {
      rej("Request failed");
    });
  });

  xhr.open(method, url);
  xhr.send();
  return promise;
};

// makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
//   console.log(usersData);
//   makeHttpRequest(
//     "GET",
//     `https://dummyjson.com/posts/user/${usersData.users[0].id}`,
//     (postsData) => {
//       console.log(postsData);
//       makeHttpRequest(
//         "GET",
//         `https://dummyjson.com/comments/post/${postsData.posts[0].id}`,
//         (commentsData) => {
//           console.log(commentsData.comments[0].user.id);
//           makeHttpRequest(
//             "GET",
//             `https://dummyjson.com/users/${commentsData.comments[0].user.id}`,
//             (user) => {
//               console.log(user);
//             }
//           );
//         }
//       );
//     }
//   );
// });

// This horizontal growing of code is called callback hell. Your code
// should grow vertically. This calling of a callback function inside another
// callback function, when done multiple times makes your code unreadable and unmaintable,
// and your code starts to look like a pyramid. This is also called pyramid of doom.

// Fixing of callback hell

makeHttpRequest("GET", "https://dummyjson.com/users")
  .then((usersData) =>
    makeHttpRequest(
      "GET",
      `https://dummyjson.com/posts/user/${usersData.users[0].id}`
    )
  )
  .then((postsData) =>
    makeHttpRequest(
      "GET",
      `https://dummyjson.com/comments/post/${postsData.posts[0].id}`
    )
  )
  .then((commentsData) =>
    makeHttpRequest(
      "GET",
      `https://dummyjson.com/users/${commentsData.comments[0].user.id}`
    )
  )
  .then((user) => console.log(user))
  .catch((error) => console.log(error));
