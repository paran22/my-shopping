import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router';
import Header from './components/Header';
import { AuthContextProvider } from './context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Outlet />
        </QueryClientProvider>
      </AuthContextProvider>
    </div >
  );
}

export default App;
