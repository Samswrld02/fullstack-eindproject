let container= document.querySelector(".container");

//central event listener with targeted responses based on classname
// s == series or m == movies
container.addEventListener("click", (e) => {
    if (e.target.className == "s") {
        let resource = "series";
        let id = e.target.dataset.id;
        //make request 
        handleRequest(resource,id);
        
    } else if (e.target.className == "m") {
        console.log(e.target.dataset.id);
        let resource = "movies";
        let id = e.target.dataset.id;
        //make request 
        handleRequest(resource,id);
       
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
