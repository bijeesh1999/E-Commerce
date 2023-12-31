import React from "react";

function SearchBar(){
    return(
        <div id="searchBar">
            <button className="allCategory">all<i className="material-symbols-outlined arrow">arrow_drop_down</i></button>
            <input className="search" type="search" placeholder="Search amazon.in"/>
            <button className="searchbtn"><i className="material-symbols-outlined">search</i></button>
        </div>
    )
}

export default SearchBar;