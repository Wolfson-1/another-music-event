import Header from './components/header';
import About from './components/About';
import Events from './components/Events';

function App() {
  const blurb = "This is the blurb for what the event is about";
  const events = [{name: "Another Music Event pt1", date:"11.11.23", lineup:null, live:true, tickets:"https://ra.co/promoters/126829"}];

  return (
    <div>
      <Header />
      <About blurb = {blurb} />
      <Events events = {events}/>
    </div>
    
  );
}

export default App;
