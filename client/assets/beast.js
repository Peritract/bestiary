function getBeastData() {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    console.log(id);

}

getBeastData();