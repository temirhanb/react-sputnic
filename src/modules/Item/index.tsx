import React from "react";
import {type TItem} from "../../assets";

export const Items: React.FC<TItem> = (
  {
    title,
    image,
    price,
    origin
  }) => {

  const correctPrice = new Intl.NumberFormat("ru-RU", {style: "currency", currency: price.currency}).format(
    price.count / 100,
  );
  return (
    <div className={"shadow-md p-5 flex flex-col m-2"}>
      <h1 className={"text-lg font-bold"}>Название: {title}</h1>
      <span className={"text-md mt-2"}>Страна: {origin}</span>
      <span className={"text-sm"}>Цена:{correctPrice} {price.currency}</span>
      <div className={"w-30 h-30 mt-2"}>
        <img className={"rounded-md "} src={image} alt="image"/>
      </div>

    </div>
  );
};