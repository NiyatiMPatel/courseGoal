import { useActionState, type FC } from "react";
import { updateGoalInDB } from "../helper/api";

const AddNewGoals: FC<ChildComponentProps> = ({dispatch}) => {
  // const[stateVariable, formActionFunctionWrapper, loadingStatus] = useActionState(formSubmitFunction, initialState)

  const [, goalsActionFunction, isPending] = useActionState<CourseGoal, FormData>(actionFunc,{title:"", description:"", id:0})

  // ADD NEW GOAL TO THE LIST AND UPDATE THE STATE
  async function actionFunc(prevState:CourseGoal, formData:FormData): Promise<CourseGoal>{
    let title = formData.get("title") as string;
    let description = formData.get("description") as string;
    try {
      const goal:NewGoal = {
        title,
        description,
      }
      if(title.trim() !=="" && description.trim()!==""){
        const newGoal:CourseGoal = await updateGoalInDB(goal)
        dispatch({type:"ADD", payload:newGoal})
      return newGoal
      }else{
        return prevState;
      }
    } catch (error) {
      console.log(error)
      return prevState;
    }
  }

return (
    <form action={goalsActionFunction}>
      <p>
     <label htmlFor="title">Your Goal</label>
     <input type="text" name="title" id="title" required/>
     </p>
     <p>
     <label htmlFor="description">Short Summary</label>
     <input type="text" name="description" id="description" required/>
     </p>
     <p>
     <button disabled={isPending}>{isPending===true ? "Adding Goal" : "Add Goal"}</button>
     </p>
    </form>
  )
}

export default AddNewGoals