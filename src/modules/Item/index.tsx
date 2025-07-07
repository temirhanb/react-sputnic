import React from "react";
import {type TItem} from "../../assets";

export const Items: React.FC<TItem> = (
  {
    title,
    image,
    price,
    origin
  }) => {
  return (
    <div className={"shadow-md p-5 flex flex-col"}>
      <h1 className={"text-lg font-bold"}>Название: {title}</h1>
      <span className={"text-md mt-2"}>Страна: {origin}</span>
      <span className={"text-lg font-bold"}>Цена:{price.count} {price.currency}</span>
      <div className={"w-30 h-30 mt-2"}>
        <img className={"rounded-md "} src={image} alt="image"/>
      </div>

    </div>
  );
};