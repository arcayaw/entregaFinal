import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ items }) {
  return items.map((item) => <Item key={item.id} item={item} />);
}
