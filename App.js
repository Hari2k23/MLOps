import React, { Component } from "react";
import axios from "axios"; 
import "./App.css"; 
 
class App extends Component { 
  state = { 
    value1: "", 
    value2: "", 
    value3: "", 
    value4: "", 
    value5: "", 
    value6: "", 
    value7: "", 
    value8: "", 
    prediction: null, 
    error: null, 
  }; 
 
  handleChange = (e) => { 
    this.setState({ 
      [e.target.name]: e.target.value, 
    }); 
  }; 
 
  handleSubmit = (e) => { 
    e.preventDefault(); 
    const { value1, value2, value3, value4, value5, value6, value7, value8 } = this.state; 
 
    axios.post("http://127.0.0.1:8000/", { 
        v1: value1, 
        v2: value2, 
        v3: value3, 
        v4: value4, 
        v5: value5, 
        v6: value6, 
        v7: value7,
        v8: value8 
      }) 
      .then((response) => { 
        this.setState({ prediction: response.data.prediction, error: null }); 
      }) 
       
  }; 
 
  render() { 
    const { value1, value2, value3, value4, value5, value6, value7, value8, prediction, error } = this.state; 
 
    return ( 
    <div id="demo"> 
    <form onSubmit={this.handleSubmit}>
      <div className="App">
      <div className='inputbox'>
        <p className="input-label">Pregnancies</p>
        <input type="number" name="value1" value={value1} onChange={this.handleChange} placeholder="Number of Pregnancies"/><br/>
        <p className="input-label">Glucose</p>
        <input type="number" name="value2" value={value2} onChange={this.handleChange} placeholder="Glucose level"/><br/>
        <p className="input-label">Blood Pressure</p>
        <input type="number" name="value3" value={value3} onChange={this.handleChange} placeholder="Blood Pressure level"/><br/>
        <p className="input-label">Skin Thickness</p>
        <input type="number" name="value4" value={value4} onChange={this.handleChange} placeholder="Skin's Thickness"/><br/>
        <p className="input-label">Insulin</p>
        <input type="number" name="value5" value={value5} onChange={this.handleChange} placeholder="Insulin level"/><br/>
        <p className="input-label">BMI</p>
        <input type="number" name="value6" value={value6} onChange={this.handleChange} placeholder="Body Mass Index"/><br/>
         <p className="input-label">Diabetes Pedigree Function</p>
        <input type="number" name="value7" value={value7} onChange={this.handleChange} placeholder="Diabetes Pedigree Function's value"/><br/>
        <p className="input-label">Age</p>
        <input type="number" name="value8" value={value8} onChange={this.handleChange} placeholder="Age"/>
      </div><br/>
      <button type="submit" className="button">Predict</button>
      </div>
      </form> 

        {prediction !== null && ( 
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginRight: '10px' , marginLeft:'20px', color:'White'}}>Possibility of Diabetes</h2> 
          <h4 style={{ marginRight: '10px' , marginLeft:'20px', color:'White'}}> {prediction} </h4>
        </div>
        )} 
        {error && <div>Error: {error}</div>} 
      </div> 
    ); 
  } 
} 
 
export default App;