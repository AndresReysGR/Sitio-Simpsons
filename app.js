

const container = document.getElementById('container');

const getWidth = () =>{
    let width = document.documentElement.clientWidth;
    pixels.innerText = `${width}px`
}

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
            <div>${age}</div>
            
            
            </br>
        `;

        console.log(firstName);
        

    });
}


getWidth();
Window.addEventListener(`resize`, getWidth);
//apiRespons(apiUrl);
getSimpsonsDatal();