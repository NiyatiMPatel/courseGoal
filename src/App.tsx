import './App.css';
import { CourseGoal, CourseGoals, NewGoal } from './types';
import { useActionState } from 'react';
import Header from './components/Header';
import goalsImg from './assets/goals.webp';
import AddNewGoals from './components/AddNewGoals';
import CourseGoalList from './components/CourseGoalList';
import { updateGoalInDB } from './helper/api';



function App() {

  const [goalsState, goalsActionFunction, isPending] = useActionState<CourseGoals, FormData>(addGoal,[])


  async function addGoal(prevState:CourseGoals, formData:FormData): Promise<CourseGoals>{
    let title = formData.get("title") as string;
    let description = formData.get("description") as string;
    try {
      const goal:NewGoal = {
        title,
        description,
      }
      if(title && description){
        const newGoal:CourseGoal = await updateGoalInDB(goal)
      
        return [...prevState, newGoal]
      }else{
        return prevState;
      }

    } catch (error) {
      console.log(error)
      return prevState;
    }
  }

  return (
    <main>
      <Header image={{src: goalsImg, alt: 'Course goal app'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <AddNewGoals status={isPending} goalsActionFunction={goalsActionFunction}/>
      <CourseGoalList goals={goalsState} />

    </main>
  )
}

export default App;
