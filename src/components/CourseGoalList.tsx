import { type ReactNode, type FC } from "react";
import CourseGoal from "./CourseGoal";
import InfoBoxProps from "./InfoBox";

const CourseGoalList: FC<CourseGoalListProps & DispatchGoalsActions> = ({
  goals,
  dispatch,
}) => {
  const deleteHandler = (id: number) => {
    dispatch({ type: "DELETE", payload: id as number });
  };

  if (goals.length === 0) {
    return (
      <InfoBoxProps mode="hint">
        You have no goals yet. Start adding some!
      </InfoBoxProps>
    );
  }

  let warning: ReactNode;

  if (goals.length >= 4) {
    warning = (
      <InfoBoxProps mode="warning" severity="low">
        You're gathering several goals. Ensure you can manage them all!
      </InfoBoxProps>
    );
  }

  if (goals.length >= 6) {
    warning = (
      <InfoBoxProps mode="warning" severity="medium">
        Your list of goals is growing. Prioritize to stay effective!
      </InfoBoxProps>
    );
  }

  if (goals.length >= 8) {
    warning = (
      <InfoBoxProps mode="warning" severity="high">
        You've set many goals. Be careful not to overload yourself!
      </InfoBoxProps>
    );
  }

  return (
    <>
      {warning}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} description={goal.description} />
            <button type="button" onClick={() => deleteHandler(goal.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
