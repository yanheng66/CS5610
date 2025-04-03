import { useAuth0 } from "@auth0/auth0-react";

interface HeaderProps {
    name: string;
    version: number;
}

export default function Header({ name, version }: HeaderProps) {
    const { isAuthenticated } = useAuth0();
    
    return (
        <header className="header">
            <h1>{name} {version}</h1>
            {isAuthenticated && <div className="user-logged-in">You are logged in</div>}
        </header>
    );
}