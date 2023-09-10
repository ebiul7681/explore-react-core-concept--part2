
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Friends from './Friends';

function App() {

  function handelClicked(){
    alert('button clicked');
  }

  const handelClicked2 =() =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num+5);
  }

  return (
    <>
      <h3>React core concepts 2</h3>

      <Friends></Friends>
      <users></users>
      <Team></Team>
      <Counter>counter: </Counter>

      <button onClick={handelClicked}>Click me</button>
      <button onClick={handelClicked2}>clicked 2</button>
      <button onClick={() =>{alert('third Clicked')}} >third</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
