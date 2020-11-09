import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { recipesSlice, configSlice, ingredientsSlice } from './reducers/';

const rootReducer = combineReducers({
   recipes: recipesSlice,
   ingredients: ingredientsSlice,
   config: configSlice,
});

type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
   interface DefaultRootState extends RootState {}
}

const store = configureStore({
   reducer: rootReducer,
});

export default store;
