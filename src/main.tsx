import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './api/store/index.ts'

createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
    </BrowserRouter>,
   </Provider>
)
