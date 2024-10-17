// Promisified Counter

function counter(num) {
  let c = 1;
  return new Promise((resolve) => {
    let id = setInterval(() => {
      console.clear();
      console.log(c++);

      if (c === num + 1) {
        clearInterval(id);
        resolve("Done counting till " + num);
      }
    }, 1000);
  });
}

counter(5).then((str) => {
  console.log(str);
});
