

const container = document.getElementById('container');

const apiUrl ="https://localhost:5001/simpsons/Character";
const apiRespons = async url =>{
    const response = await fetch(url);
    const data = response.json();
    console.log(data);

}

const getSimpsonsDatal = async ()=> {
    const response =await fetch(`${apiUrl}`);
    //console.log(response);
    const simpson = await response.json();
    console.log(simpson);

    simpson.forEach(element => {
        const{firstName, age, lastName, secondName} = element;

        container.innerHTML += `
            <div>${firstName}</div>
            <div>${secondName}</div>
            <div>${lastName}</div>
            
            </br>
        `;

        console.log(firstName);
        

    });

    


}
//apiRespons(apiUrl);
getSimpsonsDatal();