import "./App.css";
import React, { useState, useEffect } from "react";
function App() {

  const [routes, setRoutes] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    buttonAktif();
  }, [routes]);


  function newRoute() {
    setCount(count => count + 1);
    setRoutes([...routes, { id: count, isim: "", gpc_lat: "", gpc_lon: "", SC: "" }]);
  }

  const handleChange = (index) => (e) => {
    let yeniListe = routes;
    yeniListe[index].isim = e.target.value;
    setRoutes(yeniListe);
    handleError();
    buttonAktif();
  };

  const handleChange2 = (index) => e => {
    let yeniListe = routes;
    yeniListe[index].gpc_lat = e.target.value;
    setRoutes(yeniListe);
    buttonAktif();
  };

  const handleChange3 = (index) => e => {
    let yeniListe = routes;
    yeniListe[index].gpc_lon = e.target.value;
    setRoutes(yeniListe);
    buttonAktif();
  };

  const handleChange4 = (index) => e => {
    let yeniListe = routes;
    yeniListe[index].SC = e.target.value;
    setRoutes(yeniListe);
    buttonAktif();
  };

  const submit = () => {
    console.log(routes);
  }

  const handleError = () => {
    var unique = [...new Set(routes.map((route) => route.isim))];

    if (unique.length < routes.length) {
      setError(true);
    }
    else {
      setError(false);
    }
  }

  const buttonAktif = () => {
    routes.map((route) => {
      if (route.isim.length > 0 && route.gpc_lat.length > 0 && route.gpc_lon.length > 0 && route.SC.length > 0) {
        setButtonVisible(true);
      }
      else {
        setButtonVisible(false);
      }
    });
  }

  return (
    <div className="App">
      <div>
        <input placeholder="Güzergah"></input>
      </div>
      <button onClick={newRoute}>Yeni ekle</button>
      {
        <div>
          {
            routes.map((route) => {
              return NewRoute(handleChange, handleChange2, handleChange3, handleChange4, route.id, error);
            })
          }
        </div>
      }
      <button disabled={!buttonVisible} onClick={submit}>KAYDET</button>
    </div>
  );
}

function NewRoute(handleChange, handleChange2, handleChange3, handleChange4, index, error) {
  return (
    <div className="input-container">
      <input type="text" placeholder="name" onChange={handleChange(index)} />
      <input type="text" placeholder="gpc_lat" onChange={handleChange2(index)} />
      <input type="text" placeholder="gpc_lon" onChange={handleChange3(index)} />
      <input type="text" placeholder="SC" onChange={handleChange4(index)} />
      {
        error &&
        <label>İsim değeri başka bir isim değeri ile aynı olamaz!</label>
      }
    </div>
  )
}

export default App;
