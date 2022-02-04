import Jobs from "./components/Jobs/Jobs";
import store from "./store/index.js";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="font-spartan h-screen">
        <header></header>
        <main>
          <Jobs />
        </main>
      </div>
    </Provider>
  );
}

export default App;
