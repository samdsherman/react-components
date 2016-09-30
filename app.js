// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bold: false
    };
  }

  onListItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  }
  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : ''
    };
    return <li style={style} onMouseEnter={this.onListItemHover.bind(this)}
                             onMouseLeave={this.onListItemHover.bind(this)}>
             {this.props.item}
           </li>;
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => <GroceryListItem item={item} />)}
  </ul>
);
ReactDOM.render(<GroceryList items={['cucumbers', 'kale', 'potatoes', 'candy bars']}/>, document.getElementById('app'));