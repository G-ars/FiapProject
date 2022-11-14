import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='home__grid'>
        <div className='grid__one'>
          <Sidebar />
        </div>
        <div className='grid__two' >
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;
