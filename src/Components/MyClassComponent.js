import React from 'react'

class MyComponent extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      Name: props.Name,
      Age : props.Age,
      Profession : props.Profession,
      Counter:  0
    };
  }
  
  onClick = () => {
    this.setState({
      Counter: this.state.Counter + 1
    });
  }
  
  render(){
    return <div>
      <p>Name: {this.state.Name}</p>
      <p>Profession: {this.state.Profession}</p>
      <p>Age: {this.state.Age}</p>
      <p>Counter: {this.state.Counter}</p>
      <button onClick = {this.onClick}>Counter</button>
      <br/>
      <p>Class Component</p>
    </div>
  }
}

export default MyComponent;