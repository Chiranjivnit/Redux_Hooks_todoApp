import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, delteItem, editItem } from "../actions/TodoAction";

function TodoApp() {
  const [item, setItem] = useState("");
  const [editToggel, setEditTeditToggel] = useState(false);
  const [editItemInput, setEditItemInput] = useState();

  const dispatch = useDispatch();
  const storeItem = useSelector((stitm) => stitm.TodoReducer.list);
  console.log(storeItem);

  const removeItem = (itm) => {
    let res = storeItem.filter((fltr) => fltr.id !== itm.id);
    console.log("res", res);
    dispatch(delteItem(res));
  };

  const handleEdit = (itm) => {
    setEditTeditToggel(true);
    setItem(itm.data);
    console.log(itm);
    setEditItemInput(itm);
  };

  const saveItem = () => {
    console.log("item", item);
    let newEditData = storeItem.map((res, indx) => {
      if (res.id === editItemInput.id) {
        console.log("true", res);
        return { ...res, id: editItemInput.id, data: item };
      } else {
        console.log("false", res);
        return res;
      }
    });
    console.log("newEditData", newEditData);
    dispatch(editItem(newEditData));
    setEditTeditToggel(false);
    setItem("")
  };

  return (
    <>
      <figcaption>Add your List here</figcaption>
      <div className="">
        <>
          {editToggel ? (
            <div>
              <input
                type="text"
                placeholder="enter item name"
                onChange={(e) => setItem(e.target.value)}
                value={item}
              />
              <button onClick={saveItem}>Save</button>
            </div>
          ) : (
            <>
              <input
                type="text"
                placeholder="enter item name"
                onChange={(e) => setItem(e.target.value)}
                value={item}
              />
              <button onClick={() => dispatch(addItem(item), setItem(""))}>
                Add
              </button>
            </>
          )}
        </>
        <div>
          <ul>
            {storeItem
              ? storeItem.map((itm, indx) => {
                  if (itm && itm.data !== "") {
                    return (
                      <li key={indx}>
                        {itm.data}
                        <button onClick={() => removeItem(itm)}>Remove</button>
                        <button onClick={() => handleEdit(itm)}>Edit</button>
                      </li>
                    );
                  }
                })
              : ""}
          </ul>
        </div>
      </div>
    </>
  );
}
export default TodoApp;
