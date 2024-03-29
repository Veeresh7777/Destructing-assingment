function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
}


const person = {
    name: "veeresh",
    age: "22",
    address: {
        street: "bb, block ,Industrail Area.",
        city: "Sector 62,Noida",
        state: "Uttar Pradesh",
    },
};

const result = extractNameAndStreet(person);
console.log(result);