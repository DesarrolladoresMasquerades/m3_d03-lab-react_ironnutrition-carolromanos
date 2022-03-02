import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foods from "./foods.json";




function App() {
  //const [foodList, setFoodList] = useState(foods)
  //const [filteredFood, setFilteredFood] = useState(foods)
  
  return (
    <div className="App">
    <AddFoodForm/>
    <div className='list'>
      {foods.map((food)=><FoodBox food={food} />)}
    </div>
     
    </div>
  );
}

export default App;
