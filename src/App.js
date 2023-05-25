import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function App() {
 
  const [count,setCount] = useState(0);
  let data = [
    {
      model: "Mate x2",
      brand: "Huawei",
      rating: "❤️" + "99%",
      price: "115,000",
      pic: "https://tse4.mm.bing.net/th?id=OIP.gq8MjeFWa3wZUshk9Z--bAHaHA&pid=Api&P=0&h=180",
    },
    {
      model: "P30 pro",
      brand: "Huawei",
      rating: "❤️" + "99%",
      price: "157,600",
      pic: "https://tse2.mm.bing.net/th?id=OIP.CrpASRq_DOYB5EYKsFfaSgHaHa&pid=Api&P=0&h=180",
    },
    {
      model: "Mate 10 pro",
      brand: "Huawei",
      rating: "❤️" + "99%",
      price: "74,999",
      pic: "https://tse4.mm.bing.net/th?id=OIP.FdxHZtroW3EFB_iiBQ8ZQgHaHr&pid=Api&P=0&h=180",
    },
    {
      model: "Y9 prime 2019",
      brand: "Huawei",
      rating: "❤️" + "99%",
      price: "19,000",
      pic: "https://tse1.mm.bing.net/th?id=OIP.8DRMUWzEzFnxcP8e1CbSlgHaHa&pid=Api&P=0&h=180",
    },
    {
      model: "Mate 20",
      brand: "Huawei",
      rating: "❤️" + "99%",
      price: "115,000",
      pic: "https://tse2.mm.bing.net/th?id=OIP.hiOarGJeo2FhGtm8y8NH7wHaHa&pid=Api&P=0&h=180",
    },
    {
      model: "Nova 11i",
      brand: "Huawei",
      rating: "❤️" + "99%",
      price: "48,000",
      pic: "https://tse3.mm.bing.net/th?id=OIP.mkLjhW__5u03YfZdZkZUcgHaH6&pid=Api&P=0&h=180",
    },
    {
      model: "P60 pro",
      brand: "Huawei",
      rating: "❤️" + "99%",
      price: "128,000",
      pic: "https://tse1.mm.bing.net/th?id=OIP.UBTVC6Pn6hyryNpxSX9ctAHaHa&pid=Api&P=0&h=180",
    },
    {
      model: "Mate x3",
      brand: "Huawei",
      rating: "❤️" + "99%",
      price: "189,000",
      pic: "https://tse3.mm.bing.net/th?id=OIF.ghrppC1GlfrJEyDUEq2yOQ&pid=Api&P=0&h=180",
    },
  ];

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="container-fluid parent">
            <div className="navi">
              <span> Start Bootstrap</span>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                  <select>
                    <option>All Products</option>
                    <option>Popular items</option>
                    <option>New Arrivals</option>
                  </select>
                </li>
              </ul>

              <button>
                Cart<span>{count}</span>
              </button>
            </div>
            <div className="header">
              <h1>Gowtham Mobiles</h1>
              <h3>live in future</h3>
            </div>
            <div className="container">
              <div className="mid-body">
               {data.map((value,index)=> <Box
                 value={value}
                 index={index}
                 setCount={setCount}
                 count={count}
               />
               )}
              </div>
            </div>
            <div className="footer">
              <article>Copyright ©️ Enigma Delevoper 2023</article>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

function Box({value,index,setCount,count}) {
  // let data = [
  //   {
  //     model: "Mate x2",
  //     brand: "Huawei",
  //     rating: "❤️" + "99%",
  //     price: "115,000",
  //     pic: "https://tse4.mm.bing.net/th?id=OIP.gq8MjeFWa3wZUshk9Z--bAHaHA&pid=Api&P=0&h=180",
  //   },
  //   {
  //     model: "P30 pro",
  //     brand: "Huawei",
  //     rating: "❤️" + "99%",
  //     price: "157,600",
  //     pic: "https://tse2.mm.bing.net/th?id=OIP.CrpASRq_DOYB5EYKsFfaSgHaHa&pid=Api&P=0&h=180",
  //   },
  //   {
  //     model: "Mate 10 pro",
  //     brand: "Huawei",
  //     rating: "❤️" + "99%",
  //     price: "74,999",
  //     pic: "https://tse4.mm.bing.net/th?id=OIP.FdxHZtroW3EFB_iiBQ8ZQgHaHr&pid=Api&P=0&h=180",
  //   },
  //   {
  //     model: "Y9 prime 2019",
  //     brand: "Huawei",
  //     rating: "❤️" + "99%",
  //     price: "19,000",
  //     pic: "https://tse1.mm.bing.net/th?id=OIP.8DRMUWzEzFnxcP8e1CbSlgHaHa&pid=Api&P=0&h=180",
  //   },
  //   {
  //     model: "Mate 20",
  //     brand: "Huawei",
  //     rating: "❤️" + "99%",
  //     price: "115,000",
  //     pic: "https://tse2.mm.bing.net/th?id=OIP.hiOarGJeo2FhGtm8y8NH7wHaHa&pid=Api&P=0&h=180",
  //   },
  //   {
  //     model: "Nova 11i",
  //     brand: "Huawei",
  //     rating: "❤️" + "99%",
  //     price: "48,000",
  //     pic: "https://tse3.mm.bing.net/th?id=OIP.mkLjhW__5u03YfZdZkZUcgHaH6&pid=Api&P=0&h=180",
  //   },
  //   {
  //     model: "P60 pro",
  //     brand: "Huawei",
  //     rating: "❤️" + "99%",
  //     price: "128,000",
  //     pic: "https://tse1.mm.bing.net/th?id=OIP.UBTVC6Pn6hyryNpxSX9ctAHaHa&pid=Api&P=0&h=180",
  //   },
  //   {
  //     model: "Mate x3",
  //     brand: "Huawei",
  //     rating: "❤️" + "99%",
  //     price: "189,000",
  //     pic: "https://tse3.mm.bing.net/th?id=OIF.ghrppC1GlfrJEyDUEq2yOQ&pid=Api&P=0&h=180",
  //   },
  // ];
  
  const [con,setCon] = useState(true);

  // function AddCartValue(){
  //   setCon(false)
  //   setCount(count+1)
  // }

  return(
    <div className="cardSize" key={index}>
      <Card className="card1">
        <Card.Header>
          <img src={value.pic}></img>
        </Card.Header>
        <Card.Body>
          <p>Model : {value.model}</p>
          <p>Brand : {value.brand}</p>
          <p>Rating : {value.rating}</p>
          <p>Price : {value.price}</p>
        </Card.Body>
        <Card.Footer className="cardFooter">
          {con ? <Button variant="primary" onClick={()=>(
            setCon(false),
            setCount(count+1)

          )}>Add Cart</Button>: ""}{" "}
          
          {!con ? <Button variant="danger" onClick={()=>(
            setCon(true),
            setCount(count-1)

          )}>Remove</Button>: ""}{" "}
        </Card.Footer>
      </Card>
    </div>
  )
}


