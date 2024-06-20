import "./App.css";

let tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      {" "}
      work <button onClick={onClose} type="button"></button>
    </div>
  );
}

export default App;
