import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: {
      reducer: (state, actions) => {
        if (
          state.items.some(
            con => con.name.toLowerCase() === actions.payload.name.toLowerCase()
          )
        ) {
          alert(`${actions.payload.name} is already in contacts`);
          return;
        }
        state.items = [actions.payload, ...state.items];
      },
      prepare: newContact => {
        return {
          payload: { ...newContact, id: nanoid() },
        };
      },
    },
    deleteContact: (state, actions) => {
      state.items = state.items.filter(con => con.id !== actions.payload);
    },
    handleFilterSlice: (state, actions) => {
      state.filter = actions.payload;
    },
  },
});

export const { addContacts, deleteContact, handleFilterSlice } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// Генератори екшенів
//export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// Редюсер слайсу
//const tasksReducer = tasksSlice.reducer;
