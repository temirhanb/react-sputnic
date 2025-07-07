import {useState} from "react";
import {Items} from "../Item";
import {type TItem} from "../../assets";

export const ListItems = () => {

  const [items, setItems] = useState<TItem[]>([{
    id: 1,
    title: "items1",
    origin: "Rus",
    price: {count: 30000, currency: "RUB"},
    image: "https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/assorted%20fruit%20photo-6825-8b8e196d9d5fd4470911d69ad25fa5e0@2x.jpg"
  },
    {
      id: 2,
      title: "items2",
      origin: "EU",
      price: {count: 30000, currency: "EU"},
      image: "https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/assorted%20fruit%20photo-6825-8b8e196d9d5fd4470911d69ad25fa5e0@2x.jpg"

    },
    {
      id: 2,
      title: "items2",
      origin: "US",
      price: {count: 30000, currency: "USD"},
      image: "https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/assorted%20fruit%20photo-6825-8b8e196d9d5fd4470911d69ad25fa5e0@2x.jpg"

    }
  ]);
  return (
    <div className={"grid grid-cols-2"}>
      {items.map(item => (<Items key={item.id}{...item}/>))}
    </div>
  );
};