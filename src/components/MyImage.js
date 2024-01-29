import React, { useState } from "react";

let MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <div className="wrapper flex justify-center items-center gap-12 m-7">
      <div className="flex flex-col w-48 gap-3">
        {imgs.map((curElm, index) => {
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                key={index}
                onClick={() => {
                  setMainImage(curElm);
                }}
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd colm */}

      <div className="mainscreen w-2/4">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </div>
  );
};

export default MyImage;
