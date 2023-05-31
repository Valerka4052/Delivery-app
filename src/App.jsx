import './App.css'
import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { Shop } from './pages/Shop/Shop'
import { ShopingCard } from './pages/ShoppingCard/ShoppingCard'
import { ErrorPage }  from './pages/ErrorPage/ErrorPage'
import { HistoryPage } from './pages/HistoryPage/HistoryPage'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/card' element={<ShopingCard />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App
// 6LcPRlQmAAAAAGU3lC1OnEZOnlqDhLmJUr3-A6Bl