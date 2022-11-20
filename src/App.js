import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Login from './components/Login';
import GetApi from './components/GetApi';

import { useStateValue } from './components/StateProvider';


function App() {

  const [state, dispatch] = useStateValue();
  console.log('state', state);

  return (
    <div className="app">
      {!state.user ? (<Login />) : (
        <>
          <Header />
          <Container />
          <GetApi />

        </>
      )}


    </div>
  );
}

export default App;