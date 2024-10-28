import React from "react";

function NoMatch(): React.JSX.Element {
    return (
        <div style={{ padding: 20 }}>
            <h2>404: Page Not Found</h2>
            <p>The page selected does not exist.</p>
        </div>
    );
}
export default NoMatch