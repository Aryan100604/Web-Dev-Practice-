function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Rohit", proffesion: "Footballer" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching the Data ....");
    const user = await fetchUserData();
    console.log("The User data is:", user);
  } catch (error) {
    console.log("Data wasn't fetched" + error);
  }
}

getUserData();
