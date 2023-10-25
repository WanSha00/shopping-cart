import "./NewCollections.css";
import new_collections from "../../assets/new_collections.js";
import Item from "../item/Item";

function NewCollections() {
  return (
    <>
      <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
          {new_collections.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default NewCollections;
