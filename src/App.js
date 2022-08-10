import Welcome from './components/Welcome/Welcome';
import Glossary from "./components/Glossary/Glossary"
import { glossary } from "./assets/data/glossary";
import './App.css';
import { useSelectedComponent } from "./hooks/useSelectedComponent";

function App() {
  const { selectedComponent, componentShowHandler} = useSelectedComponent()
  return (
    <div className="App">
      <Welcome/>
      <Glossary
        weeks={glossary.weeks}
        topics={glossary.data}
        event={componentShowHandler} 
      />
      {
        selectedComponent
      }
    </div>
  );
}

export default App;
