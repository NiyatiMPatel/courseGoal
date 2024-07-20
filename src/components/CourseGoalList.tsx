import { type FC } from "react"
import CourseGoal from "./CourseGoal";
import { CourseGoalListProps } from "../types";


const CourseGoalList:FC<CourseGoalListProps> = ({goals}) => {

  if (!goals) {
    return <p>No goals found.</p>;
  }
  return (
  <ul>
   {goals.map((goal)=>(
    <li key={goal.id}>
      <CourseGoal title={goal.title} description={goal.description} />
    </li>
  ))}
  </ul>

  )
}

export default CourseGoalList