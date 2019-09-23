import React, { Component } from 'react';
import { render } from 'react-dom';
import products from './products';

class App extends Component {

  state = {
    products,
    prices: [],
  }

  componentDidMount() {
    const { products, prices} = this.state;

    prices = products.map(p => p.price.substr(3));
    this.setState({ prices })
  }

  sortAscending = () => {
    const { prices } = this.state;
    prices.sort((a, b) => a - b)    
    this.setState({ prices })
  }

  sortDescending = () => {
    const { prices } = this.state;
    prices.sort((a, b) => a - b).reverse()
    this.setState({ prices })
  }

  render() {
    const { prices } = this.state;
    return (
      <div>
        <ul>
          {
            prices.map((p, i) => {
              return <li>{i} - Rs.{p}</li>;
            })
          }
        </ul>
        <button onClick={this.sortAscending}>asc</button>
        <button onClick={this.sortDescending}>desc</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'))