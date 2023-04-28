import React from "react";
export { Layout };

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="p-4">
      <div className="container">{children}</div>
    </div>
  );
}
