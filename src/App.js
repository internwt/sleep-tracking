import { Route, Switch } from 'react-router-dom';
import MyResponsiveBump from './Components/MyResponsiveAreaBump'
import Sidebar from './Components/Sidebar'
import Form from './Screens/Form'

const Pages = [
  {
    name: 'signup',
    path: '/signup',
    view: Form
  },
  {
    name: 'login',
    path: '/login',
    view: Form
  }
]

function App() {
  return (
    <div className="App" style={{ height: 200 }}>
      <Sidebar />
      <Switch>
        {
          Pages.map((page, index) => <Route key={index} exact path={page.path} component={() => <page.view page={page.name} />} />)
        }
      </Switch>
      {/* <MyResponsiveBump />
      <SignUp /> */}
    </div>
  );
}

export default App;
