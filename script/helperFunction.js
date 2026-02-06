//basic fetch function to be called for requesting resources
async function get(resource, id = "", orderkey = "", direction = "") {
    //create url based on arguments passed
    const url = `api/router.php/${resource}/${id}?sort=${orderkey}&dir=${direction}`;
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

//basic fetch function to be called for updationg resources
async function update(resource, id, data) {
    //create url based on arguments passed
    const url = `api/router.php/${resource}/${id}`;
    console.log(url);

    try {
        let response = await fetch(url, {
            method: 'PUT',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`something went wrong: ${response.status}`);
        }
        let result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error.message);
    }
}
