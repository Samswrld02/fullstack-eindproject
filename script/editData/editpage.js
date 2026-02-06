//eventlistner edit functionality

async function renderEdit(resource, id) {
    //display editpage template
    let result = await get(resource, id);
    
    let template = `<form class = 'editForm'> ${editTemplate(result)} 
    <button id='save' type='submit'>save</button>
    </form>
    `;

    let container = document.querySelector(".container");
    container.innerHTML = template;
    
    

    //event listener for button
    let button = document.querySelector("#save");
    button.addEventListener("click", async (e) => {
        //prevent default behavior
        e.preventDefault();
        let payload = createPayload(result);
        console.log(payload);
        

        //make fetch request for updating data
        await update(resource, id, payload);

        //rerender the site
        firstLoadData();
    })
}

function editTemplate(array) {
    //create edit template
    function ifId(index) {
        return index != "id";
    }
    //get the values for dynamic displaying of edit page
    let editArray = Object.keys(array[0]);
    usuableArray = editArray.filter(ifId);
    
    let data = usuableArray.map(item => { 
        return `<label for ='${item}'>${item}</label>
        <input type='text' id ='${item}' name='${item}'>`;
    }).join("");
    return data;
}

function createPayload(array) {
    //create queryselector and store data in array
    function ifId(index) {
        return index != "id";
    }
    //get the values for dynamic displaying of edit page
    let editArray = Object.keys(array[0]);
    usuableArray = editArray.filter(ifId);

    let results = usuableArray.map(item => {
        return {[item]: document.querySelector(`#${item}`).value}
    })

    //merge all the objects in array into one object
    result = results.reduce(function(result, current) {
        return Object.assign(result, current);
    }, {});

    return result;
}

