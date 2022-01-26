import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Curriculum</h1>
          
      </header>
        <div className="curriculum">
          <div className="curriculum-img"> <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="prodile" /></div>
          <div className="name-surname"> <h2>Mario Rossi</h2></div>
          <div className="all-specs">
            <div className="specs">
              <h2>Esperienze Lavorative</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
              Error saepe tempore earum odit sapiente nulla omnis magni, harum <br />
                rem magnam velit hic nemo natus, alias doloribus explicabo dolor est assumenda.
              </p>
            </div>
            <div className="specs">
              <h2>Lingue</h2>
              <p>
              Italiano. <br />
              Inglese. <br />
              Spagnolo. <br />
              </p>
            </div>
            <div className="specs">
              <h2>Hobby</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                Error saepe tempore earum odit sapiente nulla omnis magni, harum <br />
                rem magnam velit hic nemo natus, alias doloribus explicabo dolor est assumenda.
              </p>
            </div>
          </div>
          <div className="form-div">
            <h2>Contattami</h2>
            <form >
              <label htmlFor="obj">Ogetto</label>
              <input type="text" name="obj" id="obj" />
              <label htmlFor="mex">Messaggio</label>
              <textarea  name="mex" id="mex" ></textarea>
            </form>
          </div>
        </div>           
    </div>
  );
}

export default App;
