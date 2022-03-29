// Fecth API - Async Await

const URL = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
    const response = await fetch(URL);
    const result = await response.json();
    result.forEach( (elements) =>{
        console.log(elements.phone);
    });
    
}

getUsers();