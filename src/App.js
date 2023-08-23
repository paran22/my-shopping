import { Outlet } from 'react-router';
import Header from './components/Header';
import { UserContextProvider } from './context/UserContext';


function App() {
  return (
    <div>
      <UserContextProvider>
        <Header />
      </UserContextProvider>
      <Outlet />
    </div>
  );
}

export default App;
