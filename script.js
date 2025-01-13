const title = document.getElementById("title");

const description = document.getElementById("description");

const leftPanelList = document.querySelector(".jellybean-list")

axios.defaults.baseURL = 'https://jellybellywikiapi.onrender.com/api/Beans';



async function initialize() {
    try{
        const response = await axios.get("/");
        const data = response.data;

        const jellybeans = data.items;

        if(jellybeans.length < 1) {
            console.log("problem");
            return;
        }


        else
            fillLeftPanel(jellybeans);

    }
    catch(err) {
        console.log(err);
    }
};

function fillLeftPanel(jellybeans) {
    jellybeans.forEach((bean) => {
        console.log(bean)
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = bean.flavorName;
        listItem.dataset.beanId = bean.beanId;
        leftPanelList.appendChild(listItem);
    });
}


initialize();