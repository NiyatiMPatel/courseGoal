import { type ReactNode } from "react";


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

type HeaderProps ={
 image: {
  src:string;
  alt: string;
 }
 children: ReactNode;
}

type AddNewGoalProps = {
 status:boolean;
 goalsActionFunction: (payload:FormData)=>void
 }

 type CourseGoalListProps = {
  goals: CourseGoal[]
 }