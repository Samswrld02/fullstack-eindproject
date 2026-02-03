
function mainTemplate (arrayS, arrayM) {
    let container = document.querySelector(".container");
    
    //row for series
    let seriesRows = createRowsMain(arrayS);

    //row for movies
    let moviesRows = createRowsMain(arrayM);

    container.innerHTML = `
        <h1>series</h1>
    <table class ='series'>
        <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Details</th>
        </tr>
        ${seriesRows}
    </table>

    <h1>films</h1>
    <table class = 'movies'>
        <tr>
            <th>Title</th>
            <th>Duur</th>
            <th>Details</th>
        </tr>
        ${moviesRows}
    </table>
    `
}

function createRowsMain(array) {
     row = array.map((row) => {
        return `
        <tr>
            <td>${row.title}</td>
            <td>${row.length_in_minutes ? row.length_in_minutes : row.rating }</td>
            <td class=${row.length_in_minutes ? "m" : "s"} data-id= ${row.id}>bekijk details</td>
        </tr>  
        `
    }).join("");

    return row;

}

