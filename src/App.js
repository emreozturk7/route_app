import "./App.css";
import React, { useState } from "react";
function App() {

  const [routes, setRoutes] = useState([]);
  const [count, setCount] = useState(0);

  function newRoute() {
    setRoutes([...routes, { "id": count, "nameID": "", "gpc_latID": "", "gpc_lonID": "", "SCID": "" }]);
    setCount(count => count + 1)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setRoutes([...routes, { "id": e.index, "nameID": e.target.value, "gpc_latID": e.target.value, "gpc_lonID": e.target.value, "SCID": e.target.value }]);
    console.log(routes);
  }

  return (
    <div className="App">
      <div className="container">
        <input type="text" placeholder="Güzergah" />
        <br />
        <button onClick={() => newRoute()}>Yeni Ekle</button>
        <br />
        <form onSubmit={handleSubmit}>
          {
            <div>
              {
                routes.map((index) => {
                  return NewRoute(index);
                })
              }
            </div>
          }
          <button type="submit">KAYDET</button>
        </form>
        <br />
        <br />
      </div>
    </div>
  );
}

function NewRoute(index) {
  return (
    <div key={index.index}>
      <input type="text" placeholder="name" key={`name+${index.index}`} />
      <input type="text" placeholder="gpc_lat" key={`gpc_lat+${index.index}`} />
      <input type="text" placeholder="gpc_lon" key={`gpc_lon+${index.index}`} />
      <input type="text" placeholder="SC" key={`SC+${index.index}`} />
    </div>
  )
}

export default App;
