import React, { useState } from "react";


function History () {
    let [searchword, setSearchWord] = useState("");


    function search(event) {
         event.preventDefault();
        alert('"Where there is no vision, there is no hope." Searching for ');
    }
    function handleWordChange (event){
        setSearchWord(event.target.value)
    }
    return (
       <div className="History">
        <form onSubmit={search}> 
            <input type="search" autoFocus={true} onChange={handleWordChange}/>
        </form>
       </div> 
    )
}










export default History;