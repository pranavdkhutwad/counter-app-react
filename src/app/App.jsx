import Counter from "../components/counter/Counter";
import Header from "../components/header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Counter />
      </main>
    </>
  );
}

export default App;
