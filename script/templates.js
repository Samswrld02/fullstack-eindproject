//function for description of every movie or series
function detailTemplate(result) {
    let mainTemplate = `
    <h1>${result[0].title}</h>
    <table>
        <tr>
            <th>information</th>
            <th>information</th>
        </tr>
        ${result[0].length_in_minutes ? createRowsM(result): createRowsS(result)}
    </table>
    `;
    let container = document.querySelector(".container");
    container.innerHTML = mainTemplate;

    //create description div
    let descript = document.createElement("div");
    descript.className = "descript";
    container.appendChild(descript);

    //append created string using map to innerhtml
    descript.innerHTML = createDescription(result);
}

//rows for description page of series
function createRowsS(array) {
    return array.map((row) => {
        return `<tr>
            <td>Awards</td>
            <td>${row.has_won_awards > 0 ? "ja" : "nee" }</td>
        </tr>
        <tr>
            <td>Seasons</td>
            <td>${row.seasons}</td>
        </tr>
        <tr>
            <td>Country</td>
            <td>${row.country}</td>
        </tr>
        <tr>
            <td>Language</td>
            <td>${row.spoken_in_language}</td>
        </tr>
        <tr>
            <td>Rating</td>
            <td>${row.rating}</td>
        </tr>
        `
    }).join("");
}

//rows for description page of movies
function createRowsM(array) {
    return array.map((row) => {
       return `
        <tr>
            <td>Datum van uitkomst</td>
            <td>${row.released_at}</td>
        </tr>
        <tr>
            <td>Land van uitkomst</td>
            <td>${row.country_of_origin}</td>
        </tr>
        <tr>
            <td>Duur</td>
            <td>${row.length_in_minutes}</td>
        </tr>
        `
    }).join("");
}

//function for creating description html based on given json data
function createDescription(array) {
    return array.map((row) => {
        return `<p>${row.summary}</p>`;
    }).join("");
}
