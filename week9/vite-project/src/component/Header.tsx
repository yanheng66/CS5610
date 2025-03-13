import React, { version } from 'react'

interface HeaderProps {
    name: string;
    version: number;
}

export default function Header({ name, version }: HeaderProps) {
    return (
        <header className="header">
            <h1>{name} {version}</h1>
            <button className="add-task-btn">Add A Task</button>
        </header>
    );
}