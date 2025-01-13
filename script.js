const title = document.getElementById("title");

const description = document.getElementById("description");

const leftPanelList = document.querySelector(".jellybean-list")

const image = document.querySelector(".card-img-top");

axios.defaults.baseURL = 'https://jellybellywikiapi.onrender.com/api/Beans';

const createBean = document.querySelector(".btn-primary");

const mainContent = document.querySelector(".card");



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
        const button = document.createElement("button");
        button.classList.add("list-group-item", "list-group-item-action");
        button.textContent = bean.flavorName;
        button.dataset.beanId = bean.beanId;

        button.addEventListener("click", () => {
            console.log(`Change Bean to: ${bean.flavorName}`);
            image.src = bean.imageUrl;
            title.textContent = bean.flavorName;
            description.innerHTML = `${bean.description}<br><strong>Ingredients:</strong><br>${bean.ingredients}`
        }); 

        leftPanelList.appendChild(button);

    });
}

initialize();

createBean.addEventListener("click", () => {
    console.log(createBean); // Should log the button
    console.log(mainContent);
    mainContent.style.display = "none";
});