// counter without setInterval using setTimeout();

function counter(time) {
  return new Promise((resolve) => {
    for (let i = 1; i <= time; i++) {
      setTimeout(() => {
        console.clear();
        console.log(i);
        if (i === time) {
          resolve(time);
        }
      }, i * 1000);
    }
  });
}

counter(15).then((time) => {
  console.log("Counter Done For " + time);
});
