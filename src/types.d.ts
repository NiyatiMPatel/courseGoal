type NewGoal = {
  title: string;
  description: string;
};

type CourseGoal = NewGoal & { id: number };

type CourseGoals = CourseGoal[];

type CourseGoalListProps = {
  goals: CourseGoals;
};

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

type GoalsActionKind = "ADD" | "DELETE";

type GoalsAction = {
  type: GoalsActionKind;
  payload: CourseGoal | number;
};

type DispatchGoalsActions = {
  dispatch: React.Dispatch<GoalsAction>;
};
