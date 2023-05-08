import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getUsersFetch, updateUser } from './actions';

function App() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.myFirstReducer.users)

  return (
    <div className="App">
      <button onClick={() => dispatch(getUsersFetch())}>Get users</button>
      <div>Users: {
        users.length > 0 && users.map(user => <div key={user.id}>
          {user.name} <button onClick={() => dispatch(updateUser(user.id))}>update</button>
        </div>)
      }</div>
    </div >
  );
}

export default App;
