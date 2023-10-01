import Header from './components/header';
import About from './components/About';
import Events from './components/Events';
import TheTeam from './components/TheTeam';
import event1 from './imgs/event1.jpg';
import './App.css';


function App() {
  const blurb = "This is the blurb for what the event is about";
  const events = [{name: "Another Music Event pt1", date:"11.11.23", lineup: event1, live:true, tickets:"https://ra.co/promoters/126829"}];
  const team = [{name: 'DJ Reece', Img:null, desc:"The rootin tootinust DJ around"}, {name: 'Demarco', Img:null, desc:"The irish Wizard"}]

  return (
    <div className="app">
      <Header />
      <About blurb = {blurb} />
      <div className='eventDiv'>
          <Events events = {events}/>
      </div>
      <TheTeam team = {team}/>
    </div>
    
    
  );
}

export default App;
