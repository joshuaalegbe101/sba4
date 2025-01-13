axios.defaults.baseURL = 'https://jellybellywikiapi.onrender.com/api/Beans';



async function initialize() {
    const response = await axios();
    const data = response.data;

    console.log(data);

};