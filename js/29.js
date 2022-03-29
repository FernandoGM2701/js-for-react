// Fetch API

const URL = "https://jsonplaceholder.typicode.com/users";

const getUsers = () => {
    fetch(URL)
    .then( (response) =>{
        return response.json();
    })
    .then ( (result)=>{
        result.forEach( (users) =>{
            console.log(users.email);
        })
    })
}

getUsers();

