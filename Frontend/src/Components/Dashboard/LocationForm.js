import { Input } from "antd";
import { useCombobox } from "downshift";
import React, { useEffect, useState } from "react";
import Decider from './Decider';
import city_data from "./cities";

function LocationForm(props) {
  const [inputItems, setInputItems] = useState([])
  const [location, setLocation] = useState([])
  const [singleLocation, setSingleLocation] = useState("")
  const [ loc, setLoc] = useState('Set Location')

  const {cities} = city_data

  useEffect(() => {

    console.log(cities)

    setLocation(cities);

    
  }, [])

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        location.filter((item) =>
          item.name.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      )
    },
  })

  const select = [singleLocation]
  const city = [loc]

  if(city.includes('Bengaluru') || city.includes('Pune') || city.includes('Gurgaon') || city.includes('Hyderabad') || city.includes('New Delhi') || city.includes('Chennai') || city.includes('Mumbai') || city.includes('Delhi')){
    return (
      <div>
        <h2>Click to update your location</h2>
        <button className="btn btn-primary" onClick={() => props.changeLoc(loc)}>Update Location</button>
      </div>
    )}

  return (
    <div className="location_find">
      
      <h2>Location Selected: {singleLocation}</h2>
      
      <div {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          className="form-control"
          placeholder="Search"
          enterbutton="Search"
          size="large"
        />
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <span
              key={item.id}
              {...getItemProps({ item, index })}
              onClick={() => setSingleLocation(item.name,item.state)}
            >
              <li
                style={highlightedIndex === index ? { background: "#ede" } : {}}
              >
                <h4>{item.name},&nbsp;{item.state}</h4>
              </li>
            </span>
          ))}
      </ul>
      <Decider changeLoc={loc => setLoc(loc)}  selected={select} special={singleLocation} />
    </div>
  )
}

export default LocationForm;