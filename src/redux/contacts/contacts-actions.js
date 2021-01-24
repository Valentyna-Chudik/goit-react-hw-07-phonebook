import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContact = createAction('contacts/Delete');

// const deleteContactRequest = createAction('contacts/deleteContactRequest');
// const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
// const deleteContactError = createAction('contacts/deleteContactError');

export const filterChange = createAction('contacts/FilterChange');

// const filterContactRequest = createAction('contacts/filterContactRequest');
// const filterContactSuccess = createAction('contacts/filterContactSuccess');
// const filterContactError = createAction('contacts/filterContactError');
