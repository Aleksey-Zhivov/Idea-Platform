import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { ticketsReducer } from "./getTicketsSlice";

export const rootReducer = combineReducers({
  getTickets: ticketsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

//кастомизация для удобства работы со стором

export const useCustomDispatch: () => AppDispatch = () => dispatchHook();
export const useCustomSelector: TypedUseSelectorHook<RootState> = selectorHook;
