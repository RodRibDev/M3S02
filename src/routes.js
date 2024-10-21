import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { ThemeContextProvider } from './contexts/Theme';

function Router() {

  return (

    <BrowserRouter>
      <Switch>
        <ThemeContextProvider>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </ThemeContextProvider>
      </Switch>
    </BrowserRouter >

  )
}

export default Router;