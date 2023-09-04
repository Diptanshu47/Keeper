import React from "react";

function Footer(){
    const time = new Date().getFullYear()
    return(
        <footer>
            <p>copyright Keeper {time}</p>
        </footer>
    )
}

export default Footer