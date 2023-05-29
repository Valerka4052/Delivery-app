import './App.css'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { Shop } from './pages/Shop'
import { ShopingCard } from './pages/ShoppingCard'
import { ErrorPage }  from './pages/ErrorPage'
import { HistoryPage } from './pages/HistoryPage'

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
  )
}

export default App
