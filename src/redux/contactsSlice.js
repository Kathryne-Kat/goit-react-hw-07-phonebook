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
