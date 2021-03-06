class ItemRow extends React.Component {
  render() {
    const item = this.props.item;
    const name = item.stocked ?
      item.name :
      <span style={{color: 'red'}}>
        {item.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{item.price}</td>
      </tr>
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
      if (rating && !item.stocked) {
        return;
      }
      rows.push(
        <ItemRow
          item={item}
          key={item.name} />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
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
            onChange={this.handleInStockChange}
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
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleRatingChange(rating) {
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
          onInStockChange={this.handleInStockChange}
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
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
ReactDOM.render(
  <FilterableItemTable items={ITEMS} />,
  document.getElementById('container')
);



const ITEMS = [
  {name: '2014 McLaren P1 &lsqb;Add-On / Replace&rsqb;', version: '2.0', uploader: '&lsqb;YCA&rsqb;Aige', downloads: '570954', likes: '2889', rating: '4.86', votes: '305'},
  {name: '2017 Nissan GTR &lsqb;Add-On | Tuning | Template&rsqb;', version: '1.0', uploader: 'YCA-y97y', downloads: '62189', likes: '2817', rating: '4.77', votes: '317'},
  {name: '2015 Ferrari LaFerrari &lsqb;Add-On | Livery&rsqb;', version: '2.1', uploader: 'Vans123', downloads: '458394', likes: '1915', rating: '4.78', votes: '317'},
  {name: 'Bugatti Veyron &lsqb;Add-On / Replace | Tuning&rsqb;', version: '6.0', uploader: 'AitGamers ( Mister Brooks )', downloads: '33678', likes: '1735', rating: '4.57', votes: '231'},
  {name: '2015 BMW i8 (I12) &lsqb;Add-On&rsqb;', version: '1.0', uploader: '&lsqb;YCA&rsqb;Aige', downloads: '413893', likes: '1735', rating: '4.82', votes: '205'},
  {name: 'Lamborghini Reventon AUTOVISTA', version: '12.0', uploader: '&lsqb;YCA&rsqb; SCRAT', downloads: '476387', likes: '1708', rating: '4.47', votes: '188'},
  {name: '2015 BMW F82 M4', version: '2.1', uploader: 'KAMELKFB', downloads: '345256', likes: '1595', rating: '4.82', votes: '227'},
  {name: '2015 Ford Mustang GT', version: '1.0', uploader: '&lsqb;YCA&rsqb;Aige', downloads: '255794', likes: '1453', rating: '4.85', votes: '176'}
];