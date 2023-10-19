import React from "react";
import { GlobalState } from "./Context";

const Pagination = () => {
  const { page, nbPages, GetPrev, GetNext } = GlobalState();
  return (
    <>
      <div className="container">
        <div className="col-md-3 d-flex justify-content-evenly">
          <button className="btn btn-primary" onClick={() => GetPrev()}>
            PREV
          </button>
          <p className="my-1">
            {" "}
            {page + 1} - {nbPages}{" "}
          </p>
          <button className="btn btn-primary" onClick={() => GetNext()}>
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
