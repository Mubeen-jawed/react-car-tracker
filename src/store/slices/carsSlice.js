import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },

    addCar(state, action) {
      //assumption:
      //action should be {name: "", cost: 0}

      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    removeCar(state, action) {
      // Assumption action.payload === list of car we want to remove
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });

      state.cars = updated;
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
