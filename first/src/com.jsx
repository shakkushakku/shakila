import React from "react"

function Navbar (){
    return <nav style ={{background:"#ddd", padding:"10px"}}> My Website</nav> 
}

function Com(){
    return (
        <div>
            <Navbar/>
            <h1> hello how are you </h1>
        </div>

    );
}

export default Com