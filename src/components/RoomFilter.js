import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

//get unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

 const RoomsFilter=({ rooms })=> {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    breakfast,
    pets
  } = context;

  //get unique types
  let types = getUnique(rooms, "type");
  //get all
  types = ["all", ...types];
  //map jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  //map jsx
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className='filter-container'>
      <Title title='Search Room' />
      <form className='filter-form'>
        {/* start select type */}
        <div className='form-group'>
          <label htmlFor='type'>Room Type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* start guests */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}>
            {people}
          </select>
        </div>
        {/* end guests */}
        {/* start of price */}
      <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input type="range" name="price" id="price" className="form-control"
            min={minPrice} max={maxPrice} value={price} onChange={handleChange} 
          />
     </div>
        {/* end of price */}
        {/* start of Size */}
<div className="form-group">
          <label htmlFor="size">room Size</label>
          <div className="size-inputs">
          <input type="number" name="minSize" id="size" className="size-input"
              value={minSize} onChange={handleChange} />
            <input type="number" name="maxSize" id="size" className="size-input"
            value={maxSize} onChange={handleChange}/>
            </div>
     </div>
        {/* end of Size */}
        {/* start extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast"
              id="breakfast" checked={breakfast} onChange={handleChange} />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets"
              id="pets" checked={pets} onChange={handleChange} />
            <label htmlFor="pets">pets</label>
          </div>
     </div>
        {/* end extras */}
      </form>
    </section>
  );
}

export default RoomsFilter