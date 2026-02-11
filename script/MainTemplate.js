
function mainTemplate(arrayS, arrayM) {
    let container = document.querySelector(".container");

    //row for series
    let seriesRows = createRowsMain(arrayS);

    //row for movies
    let moviesRows = createRowsMain(arrayM);

    let template = `
        <h1>series</h1>
        ${createButton("series")}
    <table class ='series'>
        <tr>
            <th id="titleS" class="sort"><span class="heading">Title</span></th>
            <th id="ratingS"  class="sort"><span class="heading">Rating</span></th>
            <th>Details</th>
        </tr>
        ${seriesRows}
    </table>

    <h1>films</h1>
    ${createButton("movies")}
    <table class = 'movies'>
        <tr>
            <th id="titleM" class="sort"><span class="heading">Title</span</th>
            <th id="length_in_minutesM" class="sort"><span class="heading">Duur</span></th>
            <th>Details</th>
        </tr>
        ${moviesRows}
    </table>
    `;


    container.innerHTML = template;

    return template;
}

//create rows for either series or movies based on array input
function createRowsMain(array) {
    row = array.map((row) => {
        return `
        <tr>
            <td>${row.title}</td>
            <td>${row.length_in_minutes ? row.length_in_minutes : row.rating}</td>
            <td class=${row.length_in_minutes != null ? "m" : "s"} data-id= ${row.id}>bekijk details</td>
        </tr>  
        `
    }).join("");

    return row;

}

function createButton(resource) {
    //take the array and base class based on which resource
    temp = `<button class="${resource}Add" value="${resource}">add ${resource}</button>`
    return temp;
}
