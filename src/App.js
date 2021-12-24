import './App.css';
import './style/style.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-style">
            <img className="logo" src="Logo.png" alt="bg-img" />
          </nav>
          <div className="col">
            <h1>Launching Soon!</h1>
            <p>
              For <span style={{ fontWeight: 600 }}>Better</span> &{' '}
              <span style={{ fontWeight: 600 }}> Healthy</span> future of your
              pet
            </p>
            <form>
              <input
                className="fn"
                placeholder="enter your email..."
                id="email"
              />
              <button className="notify" id="addNewEmail">
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
