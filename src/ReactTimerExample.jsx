const { createStore, combineReducers } = Redux;
const { Provider, connect } = ReactRedux;

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Item = ({name, value}) => (<div className='item'>
   <h1>{value}</h1>
   <p>{name}</p>
 </div>)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.timerId;
  }
  
  componentDidMount() {
    this.timerId = setInterval(this.updateTime.bind(this), 1000)
  }
  
  updateTime(){
    let { updateDate } = this.props;
    updateDate();
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  startClick = () => {
    clearTimeout(this.timerId);
    this.timerId = setInterval(this.updateTime.bind(this), 1000);
  }
  stopClick = () => {
    if(this.timerId) {
      clearTimeout(this.timerId);
    }
  }
  render () {
    let { day, hour, second, minute} = this.props;
     return <div className='app'>
        <Item name='Day' value={day} /><span>:</span>
        <Item name='Hour' value={hour}/><span>:</span>
        <Item name='Min' value={minute}/><span>:</span>
        <Item name='Sec' value={second}/>
       <button onClick={this.startClick}> Start </button>
       <button onClick={this.stopClick}> Stop </button>
    </div> 
  }
}


// Hour :  date.getHours(). Minutes: date.getMinutes(). Seconds: date.getSeconds()
const mapStateToProps = (state) => {
  return {
   day : DAYS[state.clock.date.getDay()],
    hour: state.clock.date.getHours(),
    minute: state.clock.date.getMinutes(),
    second: state.clock.date.getSeconds(),
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateDate : () => dispatch({type:'update'})
})

const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App);

const initialState = {
  date : new Date()
};

const AppReducer = (state = initialState, action) => {
        
          if(action.type === 'update') {
              state = {...state, date: new Date()};
          }
          return state;
     
}

const rootReducer = combineReducers({
  clock : AppReducer
});

const store = createStore(rootReducer);

const AppContainer = () => <Provider store={store}><ConnectedApp /></Provider>

const DOMNode = document.getElementById('clock');

ReactDOM.render(<AppContainer />,DOMNode)