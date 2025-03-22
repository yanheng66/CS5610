import { useState } from "react";

interface AddTaskProps {
    onAddTask: (task: { title: string; date: string }) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
    const [title, setTitle] = useState<string>("");
    const [date, setDate] = useState<string>("");

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!title || !date) {
            alert("Please fill in both fields!");
            return;
        }

        const newTask = { title, date };
        onAddTask(newTask); // Send task to parent

        setTitle("");
        setDate("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Date</label>
                <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default AddTask;