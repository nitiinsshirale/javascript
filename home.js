//console.log("Welcome to Javascript")
//alert('Html')
//console.log(document)
// String manipulations
let str = new String("Hello");
console.log(str.toUpperCase())

let num1 = new Number(10);
console.log(Number.isInteger(10.11))

console.log(Math.sqrt(4))
console.log(Math.cbrt(21))
console.log(Math.PI)


// Map objects
// supports key - value
const languages = new Map();
languages.set("Java","Partly OOPs")
languages.set("Scala","Purely OOPs")
languages.set("Typescript","TS")
languages.set("Typescript","New TS")

//languages = "Hello";

languages.forEach((v,k)=>{
    console.log(`Key: ${k}, Value : ${v}`)
});

// gives us keys & values
languages.entries();
// keys 
languages.keys();
// values
languages.values();

const countries = new Set()
countries.add("India")
countries.add("India")
countries.add("USA")
countries.add("UK")

countries.forEach(v=>console.log(v))
// renders [v,v]
for (const item of countries.entries()) {
    console.log(item)
}
function getUserInfo(event) {
    console.log(event.value);
    //document.getElementById('userName').innerText = 'Hola I was changed from JS'  
    //document.getElementById('userName').innerHTML = '<span><h2>Oops I had missed it </h2></span>';
    fetch(`https://api.github.com/users/${event.value}`)
    .then(res=>res.json())
    .then(data=> {
                console.log('Fetch Called');
                console.log('Github Username :',data.login);
                document.getElementById('userName').innerHTML = `
                <table>
                    <tr>
                        <th>Name:</th><td>${data.name}</td>
                    </tr>
                    <tr>
                        <th>Username:</th><td>${data.login}</td>
                    </tr>
                    <tr>
                        <th>Avatar:</th><td><img src='${data.avatar_url}' style="width:60px;height:60px"/></td>
                    </tr>
                </table>`;
    })
    .catch(err=> console.error(err));
}
const loadGitUsers =()=> {
    fetch('https://api.github.com/users')
    .then(res=>res.json())
    .then(data=>{
        let users = '';
        for (const u of data) {
            users += `<option value='${u.login}'>${u.login}</option>`
        }
        document.getElementById('git-users').innerHTML=`
        <select id='git-user' onchange='getUserInfo(this)'>
            ${users}
        </select>`;
        //document.getElementById('git-user').addEventListener('change',getUserInfo());
    })
    .catch(err=>console.error(err));
}