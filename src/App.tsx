import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import { TicketsPage } from './pages/tickets-page/tickets-page'
import { useCustomDispatch } from './services/store';
import { useEffect } from 'react';
import { fetchTickets } from './services/getTicketsSlice';

const AppRouter = () => {
  const navigate = useNavigate();
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  },[]);

  return (
    <>
      <Routes>
        <Route path='/' element={<TicketsPage />} />
      </Routes>
    </>
  )
}

export const App = () => {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
