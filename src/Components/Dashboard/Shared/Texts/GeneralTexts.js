import React from "react";

export function PageHeaderText({ text }) {
  return (
    <>
      <h5
        className="text-left page-head-text"
        style={{
          fontWeight: 500,
          fontSize: "2rem",
          lineHeight: "41px",
          color: "black",
          marginBottom: 0,
        }}
      >
        {text}
      </h5>
    </>
  );
}
PageHeaderText.defaultProps = {
  text: "Input Header",
};
export function ArtGalleryHeaders({ text }) {
  return (
    <h5
      className="text-left page-head-text"
      style={{
        fontWeight: 500,
        fontSize: "1.4rem",
        lineHeight: "24px",
        color: "black",
      }}
    >
      {text}
    </h5>
  );
}
ArtGalleryHeaders.defaultProps = {
  text: "Input Header",
};
