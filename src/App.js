import GlobalStyle from "./createGlobalSyles"
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";

import WorkPage from "./components/WorkPage";
import Skills from "./components/Skills";
function App() {
  return <>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme} > 
    <BrowserRouter>
      <Route exact path="/"  component={Main} />
      <Route exact path="/about"  component={AboutPage} />
      <Route exact path="/blog"  component={BlogPage} />
      <Route exact path="/skills"  component={Skills} />
      <Route exact path="/work"  component={WorkPage} />
    </BrowserRouter>
    </ThemeProvider>
   
    </>
    
}

export default App

