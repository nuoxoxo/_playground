import React, { useState, useEffect } from "react"
import Cat from "./Cat.jsx"
import Photo from "./Photo.jsx"
import Head from "./Head.jsx"

const routes = [Cat, Photo, Head]

function App() {
  const [sw, setSw] = useState(parseInt(localStorage.getItem("sw") || 0))
  const [count, setCount] = useState(parseInt(localStorage.getItem('count') || 0))
  const [LabelIsChecked, setLabelIsChecked] = useState(
    JSON.parse(localStorage.getItem("LabelIsChecked")) || false
  )
  const Route = routes[sw % routes.length]

  const handleSetLabelIsChecked = () => {
    setLabelIsChecked(!LabelIsChecked)
    console.log(LabelIsChecked)
  }

  const setBodyBackgroundColor = (index) => {
    const Colors = ["black", "white"]
    document.body.style.backgroundColor = Colors[index]
    document.body.style.color = Colors[(index + 1) % Colors.length]
    // document.querySelectorAll('a').forEach(anchor => {
    //   anchor.style.color = Colors[(index + 1) % Colors.length]
    // })
  }

  useEffect(() => {
    if (LabelIsChecked) {
      setBodyBackgroundColor(0)
    } else {
      setBodyBackgroundColor(1)
    }
    localStorage.setItem("sw", sw)
    localStorage.setItem("count", count)
    localStorage.setItem("route", JSON.stringify(Route))
    localStorage.setItem("LabelIsChecked", JSON.stringify(LabelIsChecked))
  }, [count, Route, LabelIsChecked])

  return (
    <>
      <div style={{ display: "gird", placeItems: "center" }}>
        <h1>hello world</h1>
      </div>
      <p>Count: {count}</p>
      <button className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br />
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleSetLabelIsChecked}
          checked={LabelIsChecked}
        />
        <span className="slider round"></span>
      </label>
      <br />
      <button className="btn" onClick={() => setSw((sw + 1) % routes.length)}>
        Click!
      </button>
      <Route />
    </>
  )
}

export default App
