import React, { useState } from "react";


function History () {


    function search(event) {
         event.preventDefault();
        alert('"Where there is no vision, there is no hope." Searching for ');
    }
    return (
       <div className="History">
        <form onSubmit={search}> 
            <input type="search" autoFocus={true}/>
        </form>
       </div> 
    )
}










export default History;