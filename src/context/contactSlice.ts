import { createSlice } from '@reduxjs/toolkit';

interface ContactType {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState: [
    {
      id: 1,
      name: 'Ashu',
      email: 'ashu@gmail.com',
      phoneNumber: '1234567890',
    },
    {
      id: 2,
      name: 'Santosh',
      email: 'ashu@gmail.com',
      phoneNumber: '1234567890',
    },
  ] as ContactType[],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    editContact: (state, action) => {
      const { id, updatedContact } = action.payload;
      const index = state.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...updatedContact,
        };
      }
    },
    deleteContact: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
