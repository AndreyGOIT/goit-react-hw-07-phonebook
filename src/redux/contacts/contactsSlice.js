import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.contacts.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.contacts.items = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.contacts.items = state.contacts.items.filter(
          ({ id }) => id !== payload
        );
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.contacts.items = [...state.contacts.items, payload];
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        state => {
          state.contacts.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        state => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = payload;
        }
      );
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

// export const { addContact, deleteContact } = contactsSlice.actions;
export const { filterContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
