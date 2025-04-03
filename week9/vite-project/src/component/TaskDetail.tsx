import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface User {
    id: number;
    name: string;
    taskId: number;
}

const TaskDetail: React.FC = () => {
    const { taskId } = useParams();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchUsers() {
            if (!taskId) return;
            try {
                const response = await fetch(`http://localhost:5000/users?taskId=${taskId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, [taskId]);

    if (loading) {
        return <p>Loading user(s)...</p>;
    }

    return (
        <div>
            <h2>TaskDetails of task {taskId}</h2>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} is responsible for this task
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No user found for this task.</p>
            )}
        </div>
    );
};

export default TaskDetail;