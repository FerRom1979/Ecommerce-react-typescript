import React from "react";
import { search, arrowRigth } from "../../assets/svg";

// styles
import { WrapperSearch } from "./Search.styles";

//types
type SearchProps = {
  setShowSearch?: React.Dispatch<React.SetStateAction<boolean>>;
  showSearch?: boolean;
};

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
      <button onClick={() => console.log("searching...")}>
        <img src={search} alt="search" />
      </button>
    </WrapperSearch>
  );
};

export default Search;
