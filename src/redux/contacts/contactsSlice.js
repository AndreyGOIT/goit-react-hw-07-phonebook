import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending);
  },

  // reducers: {
  //   addContact: (state, { payload }) => {
  //     state.contacts.push(payload);
  //   },
  //   deleteContact: (state, { payload }) => {
  //     state.contacts = state.contacts.filter(({ id }) => id !== payload);
  //   },
  // },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
