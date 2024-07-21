type NewGoal ={
 title:string;
 description:string;
}

type CourseGoal ={
 title:string;
 description:string;
 id:number;
}

type CourseGoals =CourseGoal[]

type CourseGoalListProps = {
 goals: CourseGoals
}

type AddNewGoalProps = {
 status:boolean;
 goalsActionFunction: (payload:FormData)=>void
 }
