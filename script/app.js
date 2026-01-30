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

    } catch (error) {
        console.error(error.message);
    }
}

getData();

