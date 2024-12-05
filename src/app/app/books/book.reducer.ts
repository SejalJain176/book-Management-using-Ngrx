import { createReducer, on } from '@ngrx/store';
import { AddBook, RemoveBook } from '../books/book.action';
import { Book } from '../models/book';

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(RemoveBook, (state, { bookId }) =>
    state.filter(((book: { id: string; }) => book.id !== bookId)
  )
);
