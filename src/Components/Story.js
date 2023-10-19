import React from "react";
import "./Story.css";
import { GlobalState } from "./Context";

const Story = () => {
  const { hits, isloading, RemovePost } = GlobalState();

  if (isloading) {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      </>
    );
  }
  return (
    <>
      {hits.map((curr) => {
        const { title, author, num_comments, objectID, url } = curr;

        // Specify the maximum length for the title
        const maxTitleLength = 20;

        // Truncate the title if it exceeds the maximum length
        const truncatedTitle =
          title && title.length > maxTitleLength
            ? `${title.substring(0, maxTitleLength)}...`
            : title;

        return (
          <>
            <div className="container">
              <div className="col-md-6">
                <div className="card" key={objectID}>
                  <h1>{truncatedTitle}</h1>
                  <p>
                    By <span>{author}</span> | <span>{num_comments}</span>{" "}
                    Comments
                  </p>
                  <div className="data d-flex justify-content-between">
                    <button className="btn btn-primary">
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href={url}
                      >
                        Read More
                      </a>
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => RemovePost(objectID)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Story;
