import logo from './logo.svg'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import Intro from './Components/Intro'
import Trending from './Components/Trending'
import Action from './Components/Action'
import "./Style/landingpage.css"

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      <div className='trending'>
        <Trending />
      </div>
      <div className='action'>
        <Action />
      </div>
    </div>
  );
}

export default App;
