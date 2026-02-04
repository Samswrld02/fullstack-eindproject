let container = document.querySelector(".container");

//central event listener with targeted responses based on classname
// s == series or m == movies
container.addEventListener("click", (e) => {
    if (e.target.className == "s") {
        let resource = "series";
        let id = e.target.dataset.id;
        //make request 
        handleRequest(resource, id);

        //checking for sorting request
    } else if (e.target.className == "m") {
        console.log(e.target.dataset.id);
        let resource = "movies";
        let id = e.target.dataset.id;
        //make request 
        handleRequest(resource, id);

        //event handler for sorting 
    } else if (e.target.className == "sort") {
        //make request
        if (e.target.id.charAt(e.target.id.length - 1) == "S") {
            let resource = "series";
            let orderkey = e.target.id.substring(0, e.target.id.length - 1);

            //call template function for redrawing
            mainTemplateSort(resource, orderkey);


        } else if (e.target.id.charAt(e.target.id.length - 1) == "M") {
            //movie request
            let resource = "movies";
            let orderkey = e.target.id.substring(0, e.target.id.length - 1);
            //call template function for redrawing
            mainTemplateSort(resource, orderkey);
        }


    }
})

//handle te get request for data and execute templates for html drawing
async function handleRequest(resource, id) {
    let result = await get(resource, id);
    console.log(result);

    //run template of showing descriptions and details about singular
    //movie or series
    detailTemplate(result, resource);
}

async function handleSort(resource, orderkey) {
    let result = await get(resource, "", orderkey);
    return result;
}
