const apiUrl ="";
const apiRespons = async url =>{
    const response = await fetech(url);
    const data = response.json();
    console.log(data);

}
apiRespons();