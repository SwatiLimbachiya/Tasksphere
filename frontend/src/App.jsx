import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tasks/")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Tasks</h1>

      <div style={styles.grid}>
        {tasks.map((task) => (
          <div key={task.id} style={styles.card}>
            <h3>{task.title}</h3>
            <p>{task.status}</p>
            <p>{task.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
}  // 👈 END OF COMPONENT

// 🔥 ADD THIS BELOW (STEP 2 STYLING)
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    backgroundColor: "#f5f6fa",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
  },

  card: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};

export default App;