import React from "react";
import { search, arrowRigth } from "../../assets/svg";
import { SearchProps } from "./types";

// styles
import { WrapperSearch } from "./Search.styles";

const Search = ({ setShowSearch, showSearch }: SearchProps) => {
  return (
    <WrapperSearch showSearch={showSearch}>
      <button
        className="arrow-rigth"
        onClick={() => setShowSearch && setShowSearch(false)}
        onBlur={() => console.log("blur")}
      >
        <img src={arrowRigth} alt="arrow rigth" />
      </button>
      <input type="text" placeholder="¿Qué estás buscando?" />
      <button className="icon-search" onClick={() => console.log("searching...")}>
        <img src={search} alt="search" />
      </button>
    </WrapperSearch>
  );
};

export default Search;
