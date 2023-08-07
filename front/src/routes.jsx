import React from "react";

export function RootErrorBoundary() {
    
    return (
        <div>
            <h1>Uh oh, something went terribly wrong 🤯</h1>
            <button onClick={() => (window.location.href = '/')}>
                Clik here to reload the app
                </button>
        </div>
    );
};