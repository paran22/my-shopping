import { Outlet } from 'react-router';
import Header from './components/Header';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header />
      </AuthContextProvider>
      <Outlet />
    </div>
  );
}

export default App;
