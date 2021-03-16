import React from "react";

function App() {
  const [listItem, setListItem] = React.useState();
  let arrayOfItems = [];

  function listItemSaved(event) {
    const { value, name } = event.target;

    const listItemForArray = { [name]: value };
    const item = listItemForArray.listItemName;
    setListItem(item);
  }

  function setArrayOfItems() {
    console.log(listItem);
    arrayOfItems.push(listItem);
    console.log(arrayOfItems);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={listItemSaved} type="text" name="listItemName" />
        <button onClick={setArrayOfItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{arrayOfItems}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
