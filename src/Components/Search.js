import { GlobalState } from "./Context";
import React from "react";

const Search = () => {
  const { query, searchPost } = GlobalState();
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Ahmad Khalil News Channel
      </h1>
      <div className="container">
        <div className="col-md-3 d-flex justify-content-center">
          <input
            style={{ border: "none" }}
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
