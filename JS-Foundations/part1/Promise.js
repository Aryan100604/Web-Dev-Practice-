const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let ans = true;
      if (ans) {
        resolve("Fetched Data Succesfully");
      } else {
        reject("Error in fetching the data");
      }
    }, 3000);
  });
};

fetchData()
  .then((data) => data.toLowerCase())
  .then((val) => console.log(val))
  .catch((error) => console.log(error));
