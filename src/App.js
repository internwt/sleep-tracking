import { Route, Switch } from 'react-router-dom';
import Form from './Screens/Form'
import Home from './Screens/Home'
import { signup, login, home } from './constant'

const Pages = [
  {
    name: signup,
    path: `/${signup}`,
    view: Form
  },
  {
    name: login,
    path: `/${login}`,
    view: Form
  },
  {
    name: home,
    path: '/',
    view: Home
  }
]

function App() {
  return (
    <div className="App" style={{ height: 200 }}>
      <Switch>
        {
          Pages.map((page, index) => <Route key={index} path={page.path} component={() => <page.view page={page.name} />} />)
        }
      </Switch>
      {/* <MyResponsiveBump />
      <SignUp /> */}
    </div>
  );
}

export default App;
