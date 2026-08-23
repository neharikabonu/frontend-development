let user = {
    name: "Neharika",
    address: {
        city: null
    }
};

console.log(user.address?.city?? "Unknown");

console.log(user.address?.city?? null);

console.log(user.address?.city?? "Vijayawada");