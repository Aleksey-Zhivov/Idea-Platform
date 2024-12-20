import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { TicketsPage } from './pages/tickets-page/tickets-page'
import { useCustomDispatch } from './services/store';
import { useEffect } from 'react';
import { fetchTickets } from './services/getTicketsSlice';
import { Header } from './components/header/header';

const AppRouter = () => {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  },[]);

  return (
    <>
      <Routes>
        <Route path='/Idea-Platform/' element={<TicketsPage />} />
      </Routes>
    </>
  )
}

export const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  )
}
