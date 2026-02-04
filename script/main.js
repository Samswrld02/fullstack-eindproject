//make fetch request for data when page loads in

//basic fetch function to be called for requesting resources
async function get(resource, id = "", orderkey = "") {
    //create url based on arguments passed
    const url = `api/router.php/${resource}/${id}?sort=${orderkey}`;
    console.log(url);

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`something went wrong: ${response.status}`);
        }

        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

//function for the first load of the site, aka the main site
async function firstLoadData() {
    let dataMovies = await get("movies");
    let dataSeries = await get("series");

    //run main template of the site function and store mainTemplate for later use
    let Maintemplate = mainTemplate(dataSeries, dataMovies);
    return Maintemplate;
}

firstLoadData();
