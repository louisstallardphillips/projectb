class Item extends React.Component {
  render() {
    const item = this.props.item;
    const name = item.name;

    return (
      <div>
        <h3>{name}</h3>
        <p>{item.price}</p>
      </div>
    );
  }
}

class ItemTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const rating = this.props.rating;

    const rows = [];

    this.props.items.forEach((item) => {
      if (item.name.indexOf(filterText) === -1) {
        return;
      }
      if (rating && !product.rating) {
        return;
      }
      rows.push(
        <Item
          item={item}
          key={item.name}
        />
      );
    });

    return (
      <div>{rows}</div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.sortByRatingChange = this.sortByRatingChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  sortByRatingChange(e) {
    this.props.onRatingChange(e.target.checked);
  }

  // sortByRatingChange = (e) => {
  //   const { rating } = this.state;
  //   rating.sort((a, b) => a - b).reverse()
  //   this.setState({ rating })
  // }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.rating}
            onChange={this.sortByRatingChange}
          />
          {' '}
          Sort by Rating
        </p>
      </form>
    );
  }
}

class FilterableItemTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      rating: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.sortByRatingChange = this.sortByRatingChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  sortByRatingChange(rating) {
    this.setState({
      rating: rating
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          rating={this.state.rating}
          onFilterTextChange={this.handleFilterTextChange}
          onRatingChange={this.sortByRatingChange}
        />
        <ItemTable
          items={this.props.items}
          filterText={this.state.filterText}
          rating={this.state.rating}
        />
      </div>
    );
  }
}


const ITEMS = [
  {category: 'Sporting Goods', price: '$49.99', rating: true, ratingb: 3.26, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', rating: true, ratingb: 3.35, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', rating: false, ratingb: 4.12, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', rating: false, ratingb: 3.56, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', rating: true, ratingb: 4.20, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', rating: true, ratingb: 3.69, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableItemTable items={ITEMS} />,
  document.getElementById('container')
);
