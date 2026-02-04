
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

//maintemplate function for drawing sorting
async function mainTemplateSort(resource, orderkey, direction) {
    //series request
    array = await handleSort(resource, orderkey, direction);

    //rewrite template based on resource
    let main = `
        <tr>
            <th id="${resource == "series" ? "titleS" : "titleM"}" class="sort">Title</th>
            <th id="${resource == "series" ? "ratingS" : "length_in_minutesM"}" class="sort">${resource == "series" ? "Rating" : "Duur"}</th>
            <th>Details</th>
        </tr>
        ${sortingTemplate(array)}
    `
    //rewrite individual table container
    let table = document.querySelector(`.${resource}`);
    table.innerHTML = main;
}
