import "./App.css";
import Header from "./component/Header";
import Mainvisual from "./component/Mainvisual";
import Store from "./component/Store";
import Catering from "./component/Catering";
const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Mainvisual />
        <Store />
        <Catering />
      </main>
    </div>
  );
};

export default App;
