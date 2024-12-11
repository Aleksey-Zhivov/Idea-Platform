import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTickets } from "./api";
import { ITicket } from "../models/ticket.model";

export const fetchTickets = createAsyncThunk("users/fetchAuth", async () =>
    getTickets());

type TTicketsState = {
    response: ITicket[],
    isLoading: boolean,
    error: string | undefined,
}

const initialState: TTicketsState = {
    response: [],
    isLoading: false,
    error: undefined,
}

const ticketsSlice = createSlice({
    name: 'getTickets',
    initialState,
    reducers: {},
    selectors: {},
    extraReducers(builder) {
        builder
        .addCase(fetchTickets.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchTickets.rejected, (state, action) => {
            state.isLoading = false,
            state.error = action.error.message
        })
        .addCase(fetchTickets.fulfilled, (state, action) => {
            state.isLoading = false,
            state.response = action.payload.tickets;
        })
    }
})

export const ticketsReducer = ticketsSlice.reducer;