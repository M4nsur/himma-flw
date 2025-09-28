import { Link } from "react-router";

export const Nav = () => {
  return (
    <div className="flex flex-col gap-2 px-4">
      <Link to="dashboard">DashboardPage</Link>
      <Link to="tasks">Tasks</Link>
      <Link to="habits">Habits</Link>
      <Link to="pomodoro">Pomodoro</Link>
      <Link to="communities">Communities</Link>
      <Link to="statistics">Statistics</Link>
      <Link to="profile">Profile</Link>
    </div>
  );
};
