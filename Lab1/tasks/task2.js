// 1: Print " 1 C F" by using callbacks with addStringWithCallback()
// 2: Print " 2 C F" by using promises with addStringWithPromise()
// 3: Print " 3 C F" by using async/await with addStringWithPromise()

function addStringWithCallback (previous, current, callback) {
  setTimeout(() => {
    callback(null, previous + ' ' + current)
  }, Math.floor(Math.random() * 100));
}

function addStringWithPromise (previous, current) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(previous + ' ' + current)
    }, Math.floor(Math.random() * 100));
  });
}

addStringWithCallback("", "1", (previous, current) => {
addStringWithCallback(current, "C", (previous, current) => {
  addStringWithCallback(current, "F", (n, value) => console.log(value))
});
});

addStringWithPromise("", "2").then((previous) => {
addStringWithPromise(previous, "C").then((previous) => {
  addStringWithPromise(previous, "F").then(console.log)
})
})

async function run() {
let result = await addStringWithPromise("", "3");
result = await addStringWithPromise(result, "C");
result = await addStringWithPromise(result, "F");
console.log(result);
}

run();