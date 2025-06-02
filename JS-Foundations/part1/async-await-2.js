function PostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data Fetched");
    }, 2000);
  });
}
function CommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment Data Fetched");
    }, 3000);
  });
}

async function BlogData() {
  try {
    console.log("Fetching the data");
    const [postData, commentData] = await Promise.all([
      PostData(),
      CommentData(),
    ]);
    console.log(postData);
    console.log(commentData);
  } catch (error) {
    console.log("Error fetching the data", error);
  }
}

BlogData();
