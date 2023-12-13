import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  function handleCarName(e) {
    dispatch(changeName(e.target.value));
  }

  function handleCarCost(e) {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  }

  return (
    <div>
      <label>
        <caption>Car name</caption>
        <input
          className="border border-gray-400 border-solid"
          onChange={(e) => handleCarName(e)}
          value={name || ""}
          type="text"
        />
      </label>
      <label>
        <caption>Car Cost</caption>
        <input
          className="border border-gray-400 border-solid"
          onChange={(e) => handleCarCost(e)}
          value={cost}
          type="number"
        />
      </label>
    </div>
  );
};

export default CarForm;
