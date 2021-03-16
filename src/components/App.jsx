import React from "react";

function App() {
  const [listItem, setListItem] = React.useState();
  const [arrayOfItems, setArray] = React.useState([]);

  function listItemSaved(event) {
    const { value, name } = event.target;

    const listItemForArray = { [name]: value };
    const item = listItemForArray.listItemName;
    setListItem(item);
  }

  function setArrayOfItems() {
    setArray((pre) => {
      return [...pre, listItem];
    });

    setListItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          value={listItem}
          onChange={listItemSaved}
          type="text"
          name="listItemName"
        />
        <button onClick={setArrayOfItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* {arrayOfItems.forEach(function (item) {
            <li>{item}</li>;
          })} */}
          {arrayOfItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
