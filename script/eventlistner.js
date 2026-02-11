let container = document.querySelector(".container");

//central event listener with targeted responses based on classname
// s == series or m == movies
container.addEventListener("click", async (e) => {
    if (e.target.className == "s") {
        let resource = "series";
        let id = e.target.dataset.id;
        //make request 
        handleRequest(resource, id);

        //checking for sorting request
    } else if (e.target.className == "m") {
        //console.log(e.target.dataset.id);
        let resource = "movies";
        let id = e.target.dataset.id;
        //make request 
        handleRequest(resource, id);

        //event handler for sorting 
    } else if (e.target.className == "sort") {
        //make request
        if (e.target.id.charAt(e.target.id.length - 1) == "S") {
            if (e.target.id == "titleS") {
                direction = toggle1();
            } else {
                direction = toggle2();
            }
            let resource = "series";
            let orderkey = e.target.id.substring(0, e.target.id.length - 1);

            //call template function for redrawing
            mainTemplateSort(resource, orderkey, direction);

        } else if (e.target.id.charAt(e.target.id.length - 1) == "M") {
            if (e.target.id == "titleM") {
                //different toggle for each column
                direction = toggle1();
            } else {
                direction = toggle2();
            }
            //movie request
            let resource = "movies";
            let orderkey = e.target.id.substring(0, e.target.id.length - 1);
            //call template function for redrawing
            mainTemplateSort(resource, orderkey, direction);
        }
    } else if (e.target.className == "edit") {
        //display edit page template
        let id = e.target.value;
        let resource;
        if (e.target.id == "s") {
            resource = "series";
        } else {
            resource = "movies";
        }
        console.log(resource, id);

        renderEdit(resource, id);
    }
    else if (e.target.id == "return") {
        firstLoadData();

    }
    else if (e.target.className == "seriesAdd" || e.target.className == "moviesAdd") {
        if (e.target.value == "movies") {
            //display data insert template
             let info = {
                title: "lmao",
                length_in_minutes: 100,
                released_at: "2018-01-14",
                country_of_origin: "uk",
                summary: "lol",
                youtube_trailer_id: ""
            };
            console.log("clicked");
            //start post request 
            await insert(e.target.value, info);
            firstLoadData();

        } else if (e.target.value == "series") {
            //display data insert template

            //start post request
            await insert(e.target.value, info)
            firstLoadData();
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


