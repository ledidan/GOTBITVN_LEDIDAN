import * as React from "react";
import data from "../data.json";
const ListPost = () => {
  return (
    <div className="container mx-auto px-20">
      {Object.values(data).map((el) => (
        <div className="border-red-700 mb-5 border p-4">
          <div className="flex items-center text-left">
            <div className="img">
              <img
                src={el.thumbnail}
                alt={el.title}
                className="p-2"
                style={{ maxWidth: "200px", maxHeight: "400px" }}
              />
            </div>
            <div className="content">
              <h3 className="text-red-700 text-lg">{el.title}</h3>
              <h1 className="text-xl">
                {(el.price / 1000000).toFixed(1)} triệu / tháng
              </h1>
              <div className="flex items-center ">
                <p className="text-md p-4">
                  <strong>diện tích: </strong>
                  {el.area} + m2
                </p>
                <p>
                  <strong>Khu vực: </strong>
                  {el.district}
                </p>
              </div>
              <p className="text-md">{el.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListPost;
