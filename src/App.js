import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/styles';
import { GlobalStyle } from './components/globalStyle';
import { Base } from './components/base'
import { SCard } from './components/singleCard'
import { GetData } from './components/getData';

export const Router = createContext(null)
export const Data = createContext(null)
export const Theme = createContext(null)

function App() {
  const [page, setPage] = useState()
  const [data, setData] = useState([])
  const [stat, setStat] = useState(false)

  // console.log(data)
  const [theme, setTheme] = useState('light')

  return (
    <>
      <Theme.Provider value={{theme, setTheme}}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Router.Provider value={{ page, setPage }}>
            <Data.Provider value={{ data, setData, stat, setStat }}>
              <GetData />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Base data={data} stat={stat} />} />
                  <Route path="/loc/:location" element={<SCard n={page} d={data} s={stat} />} />
                </Routes>
              </BrowserRouter>
            </Data.Provider>
          </Router.Provider>
        </ThemeProvider>
      </Theme.Provider>
    </>
  );
}

export default App;
