class Item extends React.Component{
  render() {
      // console.log(this.props.date)
  return (
      <li>{this.props.items} <button onClick={this.props.remove} value={this.props.items}>remove item</button> <button onClick={this.props.edit} value={this.props.items}>edit item</button> <button onClick={this.props.done} value={this.props.items}>mark done</button> {this.props.date}</li>
    );
  }
}
class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.addHandler = this.addHandler.bind(this);
  }

  state = {
    list : [],
    word : ""
  }
  addHandler(word){
    console.log("yuhooooo");
    let addTask = this.state.list;
    let date = moment().format("LLLL");
    addTask.push(word.target.value + "Added on : " + date);
    this.setState({word: "", list: addTask});
    console.log(this.state.list)
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }

  render() {
      // render the list with a map() here
      console.log("rendering");
      const todo = this.state.list.map(item => {return <Item items={item}></Item>});
      return (
        <div className="list">
        <h1>Current Date & Time: {moment().format('LLLL')}</h1>
          <input onChange={this.changeHandler} value={this.state.word}/> //maxlength="10"/>
          <button onClick={this.addHandler} value={this.state.word}>add item</button>
          {/* <p>Characters left: {wordCount}</p> */}
          Ongoing List
          <ul>
            {todo}
          </ul>
          Done List
          <ul>
            {/* {doneList} */}
          </ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

