import {type FC } from "react"
import CourseGoal from "./CourseGoal";

const CourseGoalList:FC<CourseGoalListProps & ChildComponentProps> = ({goals,dispatch}) => {

  const deleteHandler = (id:number)=>{
      dispatch({ type: "DELETE", payload: id });
  }

  if (goals.length===0) {
    return <p>No goals found.</p>;
  }
  return (
  <ul>
   {goals.map((goal)=>(
    <li key={goal.id}>
      <CourseGoal title={goal.title} description={goal.description} />
      <button type="button" onClick={()=>deleteHandler(goal.id)}>Delete</button>
    </li>
  ))}
  </ul>

  )
}

export default CourseGoalList