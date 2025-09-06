import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ROUTES } from "./const";
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.QUIZ} element={<QuizPage />} />
        <Route path={ROUTES.RESULT} element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  )
}
