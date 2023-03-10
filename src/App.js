import Body from "./components/body";
import "./App.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  <DndProvider backend={HTML5Backend}>
    return <Body />;
  </DndProvider>;
}

export default App;
