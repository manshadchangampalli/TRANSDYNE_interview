import React from "react";

const SearchBox = ({ onSearch }) => {
    return (
        <input
            onChange={(e) =>
                onSearch(e.target.value)
            }
            type="text"
            name=""
            placeholder="Search"
            id=""
        />
    );
};

export default React.memo(SearchBox);
