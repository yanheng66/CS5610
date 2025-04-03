import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// This component renders a login button using Auth0's loginWithRedirect
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button onClick={() => loginWithRedirect()}>
            Log In
        </button>
    );
};

export default LoginButton;