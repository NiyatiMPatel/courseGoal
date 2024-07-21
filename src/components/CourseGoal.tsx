import { type FC } from "react";

const CourseGoal: FC<NewGoal> = ({title, description}) => {
   return (
     <article>
      <div>
       <h2>{title}</h2>
       <p>{description}</p>
      </div>
      <button>Delete</button>
     </article>
   )
 }

export default CourseGoal; 