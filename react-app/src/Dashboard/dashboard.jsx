import React, { useState } from "react";
import { Sidebar } from "./sidebar";

export function Dashboard({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="dashboard">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
      />

      <div
        className="dashboard-content"
        style={{
          marginLeft: collapsed ? "80px" : "280px",
          transition: "margin-left 0.3s ease",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}
