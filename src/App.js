import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import 'foundation/font/font.import';
import Home from 'components/pages/Home/Home';
import Description from 'components/pages/Description/Description';

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/description" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />}/>
          </Routes>
        </Router>
    </AppWrapper>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
`

export default App;
