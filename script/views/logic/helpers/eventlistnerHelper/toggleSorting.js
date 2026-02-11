//toggles beginner states for item one or two
sortClicked1 = true;
sortClicked2 = true;

//toggle function
function toggle1() {
    //set toggle for sorting
    if (sortClicked1 == true) {
        direction = "ASC";
        sortClicked1 = false;
    } else {
        direction = "DESC";
        sortClicked1 = true;
    }
    return direction;
}

function toggle2() {
    //set toggle for sorting
    if (sortClicked2 == true) {
        direction = "ASC";
        sortClicked2 = false;
    } else {
        direction = "DESC";
        sortClicked2 = true;
    }
    return direction;
}

//maintemplate function for drawing sorting
async function mainTemplateSort(resource, orderkey, direction) {
    //series request
    array = await handleSort(resource, orderkey, direction);

    //rewrite template based on resource
    let main = `
        <tr>
            <th id="${resource == "series" ? "titleS" : "titleM"}" class="sort"><span class="heading">Title</span></th>
            <th id="${resource == "series" ? "ratingS" : "length_in_minutesM"}" class="sort"><span class="heading">${resource == "series" ? "Rating" : "Duur"}</span></th>
            <th>Details</th>
        </tr>
        ${sortingTemplate(array)}
    `
    //rewrite individual table container
    let table = document.querySelector(`.${resource}`);
    table.innerHTML = main;
}

//template for drawing sorted rows per item
function sortingTemplate(array) {
    return array.map((item) => {
        return `
        <tr>
            <td>
                ${item.title}
            </td>
            <td>
                ${item.rating ? item.rating : item.length_in_minutes}
            </td>
             <td class=${item.length_in_minutes ? "m" : "s"} data-id= ${item.id}>bekijk details</td>
        </tr>
        `
    }).join("");
}

async function handleSort(resource, orderkey, direction) {
    let result = await get(resource, "", orderkey, direction);
    return result;
}




