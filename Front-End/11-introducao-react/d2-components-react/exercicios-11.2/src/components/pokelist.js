import React from "react";

class Pokemon extends React.Component {

  render() {
    return (
      <div key={this.props.poke.id} className='card'>
        <h4>{this.props.poke.name}</h4>
        <p>{this.props.poke.type} </p>
        <p>{this.props.poke.averageWeight.value}kg</p>
        <img src={this.props.poke.image} alt={this.props.poke.name}></img>
      </div>
    )
  }
}

export default Pokemon;