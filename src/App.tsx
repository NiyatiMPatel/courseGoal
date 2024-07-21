import './App.css';
import { useReducer } from 'react';
import Header from './components/Header';
import AddNewGoals from './components/AddNewGoals';
import CourseGoalList from './components/CourseGoalList';

function reducer(state:CourseGoals, action:GoalsAction): CourseGoals {
  const {type, payload} = action
  switch(type){
    case "ADD": 
    return [...state, payload as CourseGoal];
      
    case "DELETE":
      return state.filter((st)=>st.id !== payload)
    default:
      return state;
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, [])

  return (
    <main>
      <Header />
      <AddNewGoals dispatch={dispatch}/>
      <CourseGoalList goals={state} dispatch={dispatch}/>
    </main>
  )
}

export default App;
