// pending, fulfilled, rejected

let promise =new Promise((resolve, reject) => {
    if(5>10){
        resolve("Resolved");
    }
    else{
        reject("Rejected");
    }
});

promise
    .then((resolve)=>console.log(resolve))
    .catch((reject)=>console.log(reject));


// instead of using multiple then and catch => async and await

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response);
        let data = response.json();
        return data;
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

// API call using async and await

const fetchUsers = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

fetchUsers();
