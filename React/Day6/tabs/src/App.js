
import './App.css';
import Tabs from './components/Tabs'
import DisplayTabs from './components/DisplayTabs'

function App() {
  return (
    <div className="App">
      <Tabs tabs ={[{name :"Tab1", content:"Tab 1 content is showing here"}, {name :"Tab2", content:"Tab 2 content is showing here"}, {name :"Tab3", content:"Tab 3 content is showing here"}]}></Tabs>
    </div>
  );
}

export default App;
