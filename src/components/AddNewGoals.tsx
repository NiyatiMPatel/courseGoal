import { type FC } from "react";
import { AddNewGoalProps } from "../types";


const AddNewGoals: FC<AddNewGoalProps> = ({status, goalsActionFunction}) => {

  

  return (
    <form action={goalsActionFunction}>
      <p>
     <label htmlFor="title">Your Goal</label>
     <input type="text" name="title" id="title"/>
     </p>
     <p>
     <label htmlFor="description">Short Summary</label>
     <input type="text" name="description" id="description"/>
     </p>
     <p>
     <button>{status===true ? "Adding Goal" : "Add Goal"}</button>
     </p>
    </form>
  )
}

export default AddNewGoals