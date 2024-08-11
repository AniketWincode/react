import "./App.css";

let name = "Aniket"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contect</li>
      </nav>
      <div className="container">
        <h1>Hello {name} </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ea
        accusantium esse quod incidunt possimus assumenda, ipsa nobis
        repellendus. Voluptatibus cum cupiditate consectetur totam, possimus
        omnis at ad laborum porro animi a qui similique.
      </div>
    </>
  );
}

export default App;
