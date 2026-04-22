import React from "react";
import { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim() === "") return;

        const newTask = {
            id: Date.now(),
            text: input,
        };

        setTasks([...tasks, newTask]);
        setInput(""); // clear input properly
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Todo App</h1>

            <input
                type="text"
                name="text"
                id="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={addTask}>Add</button>

            <div style={{ marginTop: "15px" }}>
                {tasks.map((task) => (
                    <div key={task.id} style={{ marginBottom: "8px" }}>
                        {task.text}
                        <button
                            onClick={() => deleteTask(task.id)}
                            style={{ marginLeft: "10px" }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo