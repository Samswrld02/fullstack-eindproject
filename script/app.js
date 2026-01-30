//make fetch request for data when page loads in


async function getData() {
    let data = {action: "show"}
    const url = "api/router.php";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        
        showdata(result);

    } catch (error) {
        console.error(error.message);
    }
}

getData();

function showdata(data) {

            for (let o = 0; o < data[0].length; o++) {
                //looping through array pair individually
                console.log("--");
                
                let first = data[0][o].title;
                let second = data[0][o].rating;
            

                //create row
                let row = document.createElement("TR");
                num = o.toString();
                row.setAttribute("class", `tr${num}`);
                document.querySelector(".series").appendChild(row);
                
                array = data[0][o];
                //turn object into array
                array = Object.entries(array)
                
                for (let x = 0; x < array.length; x++) {
                    console.log(array[x][1]);
                    let td = document.createElement("TD");
                    td.innerHTML = array[x][1];
                    document.querySelector(`.tr${num}`).appendChild(td);
                }


            }
        
    }
    
