const apiUrl ="https://localhost:5001/simpsons/Character";
const apiRespons = async url =>{
    const response = await fetch(url);
    const data = response.json();
    console.log(data);

}
apiRespons(apiUrl);