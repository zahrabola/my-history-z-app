import React from "react";


const Search = ({ text,  setText }) => {
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Searching...."
          value={text}
      
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
