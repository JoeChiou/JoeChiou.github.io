
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { PageMain, PageTest } from './pages';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/*" element={<PageMain />} />
        <Route path="/test" element={<PageTest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
