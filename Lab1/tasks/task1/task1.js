/**
 * Повинно повертати проміс із значенням в консоль після затримки в delayInMs
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */

function makeDelayPromise(value, delayInMs) {
    return new Promise((resolve, reject) => setTimeout(() => resolve(value), delayInMs));
}

makeDelayPromise('test', 1000)
    .then(console.log)
    .catch(() => console.log(`AHAHAHAHAHA ERROR!`))
