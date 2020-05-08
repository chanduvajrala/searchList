import React, { useState, createRef, useRef } from "react";
//data
import data from './data'
//lib
import SearchBar from './lib/searchBar.js'
import SearchList from './lib/searchList.js'
import inputState from './lib/inputState.js'
//styles
import './App.css';

function App() {
  const [items, setItems] = useState(data);
  const [cursor, setCursor] = useState(0);
  const ref = useRef([...Array(items.length)]
                .map(
                  () => createRef())
              )
  const {value, onChange: onChangeValue} = inputState("");
  
  const onChangeSearchText = event => {
    const results = data.filter(item => search(item, value))
    onChangeValue(event);
    setCursor(0);
    setItems(results);
  }

  const handleMouseHover = i => {
    setCursor(i);
  }

  const handleKeyDown = e => {
    if(e.keyCode === 38 && cursor > 0){
      // console.log("cursor" + cursor);
      setCursor(cursor - 1);
      // console.log(ref);
      ref.current[cursor-1].current.scrollIntoView()
    } else if(e.keyCode === 40 && cursor < items.length - 1){
      // console.log("cursor" + cursor);
      ref.current[cursor].current.scrollIntoView()
      setCursor(cursor + 1);
    }
  }

  return (
    <div className="App">
      <SearchBar value={value} onKeyDown={handleKeyDown} onChange={onChangeSearchText} />
      {
        value.length > 0 ? 
        (<SearchList data={items} cursor= {cursor} ref = {ref.current} onMouseOver = {handleMouseHover}/>)
        : null
      }
    </div>
  );
}

function search(item, query) {
  return (
    item.id.includes(query) ||
    item.id.split("-").join("").includes(query) ||
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.address.toLowerCase().includes(query.toLowerCase()) ||
    item.pincode.includes(query)
  );
}

export default App;
