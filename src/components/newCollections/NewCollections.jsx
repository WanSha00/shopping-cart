import "./NewCollections.css";
//import new_collections from "../../assets/new_collections.js";
import new_collections from "../../assets/all_products";
import Item from "../item/Item";
import { forwardRef } from "react";

const NewCollections = forwardRef(function NewCollections(props, ref) {
  return (
    <>
      <div ref={ref} className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
          {new_collections.map((item) => {
            if (item.newItem === 1) {
              return <Item key={item.id} item={item} />;
            }
          })}
        </div>
      </div>
    </>
  );
});

export default NewCollections;
