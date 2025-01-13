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

//Form Button Pressed
createBean.addEventListener("click", () => {
    console.log(createBean); // Should log the button
    console.log(mainContent);
    mainContent.style.display = "none";

    const form = document.createElement("form");
    form.id = "jellybeanForm";
    form.innerHTML = `
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Enter title" required>
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <textarea class="form-control" id="body" rows="3" placeholder="Enter body" required></textarea>
      </div>
      <div class="form-group">
        <label for="userId">User ID</label>
        <input type="number" class="form-control" id="userId" placeholder="Enter user ID" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
    `;
    //form submit
});