function Isvalid() {
    document.addEventListener("onclick", (ev) => {
        if (getElementById("Search").textContent.includes("@%*$")) {
            ev.preventDefault();

        }
        else (
            console.log("data sent")
        )
    });
    //  

}