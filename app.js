const simpsonsName=document.getElementById('simpson-nombre');
const simpsonsLast=document.getElementById('simpson-apellido');
const simpsonsSname=document.getElementById('simpson-snombre');
const simpsonsAge=document.getElementById('simpson-edad');

const apiUrl ="https://localhost:5001/simpsons/Character";
const apiRespons = async url =>{
    const response = await fetch(url);
    const data = response.json();
    console.log(data);

}

const getSimpsonsDatal = async ()=> {
    const response =await fetch(`${apiUrl}`);
    console.log(response);
    const simpson = await response.json();
    console.log(simpson);
    const{firstName, age, lastName, secondName} = simpson;
    simpsonsName.innerText = firstName;
    simpsonsAge.innerText = age;
    simpsonsLast.innerText = lastName;
    simpsonsSname.innerText = secondName;

    console.log(firstName);

}
//apiRespons(apiUrl);
getSimpsonsDatal();