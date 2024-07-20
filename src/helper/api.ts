import { CourseGoal, NewGoal } from "../types";

export async function updateGoalInDB({title,description}:NewGoal) {
 // Sleep for 1500ms to mimic an API call round trip
 let courseGoal:CourseGoal = {
  title,
  description,
  id: Math.random()
 }
 await new Promise(resolve => setTimeout(resolve, 1500))
 // if (newGoal.toLowerCase().includes("error")) {
 //     throw new Error("Failed to update name")
 // }
 return courseGoal;
}
