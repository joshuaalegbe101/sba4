const title = document.getElementById("title");

const description = document.getElementById("description");

axios.defaults.baseURL = 'https://jellybellywikiapi.onrender.com/api/Beans';



async function initialize() {
    const response = await axios("?flavorName=7up");
    const data = response.data;

    console.log(data.imageUrl);

};

initialize();