import {Items} from "../Item";
import {useListItemHook} from "./hook/useListItemHook";

export const ListItems = () => {

  const {items} = useListItemHook();
  return (
    <div className={"grid sm:grid-cols-1 md:grid-cols-2 "}>
      {items.map(item => (<Items key={item.id}{...item}/>))}
    </div>
  );
};