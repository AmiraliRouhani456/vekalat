import { useParams, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { username } = useParams();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>سلام {username} 👋</h1>
      <p>این داشبورد مخصوص شماست</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
