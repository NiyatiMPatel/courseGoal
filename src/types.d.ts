type NewGoal = {
 title:string;
 description:string;
}

type CourseGoal = NewGoal & { id:number}

type CourseGoals = CourseGoal[]

type CourseGoalListProps = {
 goals: CourseGoals
}

type AddNewGoalProps = {
 status:boolean;
 goalsActionFunction: (payload:FormData)=>void
 }
 
type GoalsActionKind = 'ADD' | 'DELETE'

type GoalsAction = {
type:GoalsActionKind;
payload: CourseGoal | number
}

type ChildComponentProps = {
 dispatch: React.Dispatch<GoalsAction>;
}