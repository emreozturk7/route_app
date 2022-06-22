import "./App.css";
import React, { useState } from "react";
function App() {

  const [routes, setRoutes] = useState([]);
  const [count, setCount] = useState(0);

  function newRoute() {
    setCount(count => count + 1);
    setRoutes([...routes, { id: count, isim: "", gpc_lat: "", gpc_lon: "", SC: "" }]);
  }

  const handleChange = (index) => (e) => {
    let yeniListe = routes;
    yeniListe[index].isim = e.target.value;
    setRoutes(yeniListe);
  };

  const handleChange2 = (index) => e => {
    let yeniListe = routes;
    yeniListe[index].gpc_lat = e.target.value;
    setRoutes(yeniListe);
  };

  const handleChange3 = (index) => e => {
    let yeniListe = routes;
    yeniListe[index].gpc_lon = e.target.value;
    setRoutes(yeniListe);
  };

  const handleChange4 = (index) => e => {
    let yeniListe = routes;
    yeniListe[index].SC = e.target.value;
    setRoutes(yeniListe);
  };

  const submit = () => {
    console.log(routes);
  }

  return (
    <div className="App">
      <button onClick={newRoute}>Yeni ekle</button>
      {
        <div>
          {
            routes.map((route) => {
              return NewRoute(handleChange, handleChange2, handleChange3, handleChange4, route.id);
            })
          }
        </div>
      }
      <button onClick={submit}>ekle</button>
    </div>
  );
}

function NewRoute(handleChange, handleChange2, handleChange3, handleChange4, index) {
  return (
    <div >
      <div>{index}</div>
      <input type="text" placeholder="name" onChange={handleChange(index)} />
      <input type="text" placeholder="gpc_lat" onChange={handleChange2(index)} />
      <input type="text" placeholder="gpc_lon" onChange={handleChange3(index)} />
      <input type="text" placeholder="SC" onChange={handleChange4(index)} />
    </div>
  )
}

export default App;
