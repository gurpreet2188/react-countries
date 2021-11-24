import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Base } from './components/base'
import { SCard } from './components/singleCard'
import { GetData } from './components/getData';

export const Router = createContext(null)
export const Data = createContext(null)

function App() {
  const [page, setPage] = useState("")
  const [data, setData] = useState([])
  const [stat, setStat] = useState(false)

  return (
    <>
      <Router.Provider value={{ page, setPage }}>
        <Data.Provider value={{ data, setData, stat, setStat }}>
          <GetData />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Base data={data} stat={stat} />} />
              <Route path="/loc/:location" element={<SCard n={page} d={data} />} />
            </Routes>
          </BrowserRouter>
        </Data.Provider>
      </Router.Provider>
    </>
  );
}

export default App;
