/**
 * Should return promise with error
 * 
 * @returns {Promise<,"Boo!">}
 */

function makePromiseRejectWithBoo() {
    return Promise.reject("Boo!");
}

makePromiseRejectWithBoo()
    .then(console.log)
    .catch(error => console.error("Promise rejected:", error));