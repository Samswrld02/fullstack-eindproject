//make fetch request for data when page loads in
//function for the first load of the site, aka the main site
async function firstLoadData() {
    let dataMovies = await get("movies");
    let dataSeries = await get("series");

    //run main template of the site function and store mainTemplate for later use
    let Maintemplate = mainTemplate(dataSeries, dataMovies);
    return Maintemplate;
}

firstLoadData();



