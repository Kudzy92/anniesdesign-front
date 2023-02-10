import React,{useState} from 'react'
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import Loader from './components/Loader'
import Pages from './pages/Pages'

function App() {
  const [isLoading, setIsLoading]=useState(true);
  setTimeout(()=>{
    setIsLoading(false);
  },5000)
  return (
    <div className="App">
     {isLoading ? <Loader />:<><Provider store={store}><Pages /></Provider></>}
    </div>
  );
}

export default App;
