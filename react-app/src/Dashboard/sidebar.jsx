// src/components/common/Sidebar.jsx

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../css/sidebar.module.css";
import {
  FiHome,
  FiBookOpen,
  FiFileText,
  FiVideo,
  FiAward,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
  FiBarChart2,
  FiFolder,
  FiCpu,
  FiUser,
  FiBell,
} from "react-icons/fi";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // Mock user data - replace with actual user data from props or store
  const user = {
    role: "student", // or "trainer", "admin"
    profile: {
      firstName: "John",
      lastName: "Doe",
    },
  };

  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Define navigation items based on user role
  const getNavItems = () => {
    const commonItems = [
      { path: "/dashboard", icon: <FiHome />, label: "Dashboard" },
    ];

    const studentItems = [
      { path: "/courses", icon: <FiBookOpen />, label: "My Courses" },
      { path: "/scenarios", icon: <FiCpu />, label: "Scenarios" },
      { path: "/assessments", icon: <FiFileText />, label: "Assessments" },
      { path: "/portfolio", icon: <FiFolder />, label: "Portfolio" },
      { path: "/achievements", icon: <FiAward />, label: "Achievements" },
    ];

    const trainerItems = [
      {
        path: "/courses/manage",
        icon: <FiBookOpen />,
        label: "Manage Courses",
      },
      { path: "/materials", icon: <FiVideo />, label: "Learning Materials" },
      {
        path: "/assessments/create",
        icon: <FiFileText />,
        label: "Create Assessments",
      },
      { path: "/students", icon: <FiUsers />, label: "Students" },
      { path: "/analytics", icon: <FiBarChart2 />, label: "Analytics" },
    ];

    const adminItems = [
      { path: "/admin/users", icon: <FiUsers />, label: "User Management" },
      {
        path: "/admin/courses",
        icon: <FiBookOpen />,
        label: "Course Management",
      },
      {
        path: "/admin/analytics",
        icon: <FiBarChart2 />,
        label: "System Analytics",
      },
      { path: "/admin/settings", icon: <FiSettings />, label: "Settings" },
    ];

    switch (user?.role) {
      case "student":
        return [...commonItems, ...studentItems];
      case "trainer":
        return [...commonItems, ...trainerItems];
      case "admin":
        return [...commonItems, ...adminItems];
      default:
        return commonItems;
    }
  };

  const navItems = getNavItems();

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      {/* Sidebar Header */}
      <div className={styles.sidebarHeader}>
        {!collapsed && (
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🎓</span>
            <span className={styles.logoText}>CBET</span>
          </div>
        )}
        {collapsed && <span className={styles.logoIconSmall}>🎓</span>}

        <button onClick={toggleSidebar} className={styles.toggleBtn}>
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      {/* User Info */}
      {user && (
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            {user.profile?.firstName?.charAt(0) || <FiUser />}
          </div>
          {!collapsed && (
            <div className={styles.userDetails}>
              <p className={styles.userName}>
                {user.profile?.firstName} {user.profile?.lastName}
              </p>
              <p className={styles.userRole}>{user.role}</p>
            </div>
          )}
        </div>
      )}

      {/* Navigation Items */}
      <nav className={styles.nav}>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
          >
            <span className={styles.navIcon}>{item.icon}</span>
            {!collapsed && (
              <span className={styles.navLabel}>{item.label}</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Notifications */}
      {!collapsed && (
        <div className={styles.notifications}>
          <div className={styles.notificationHeader}>
            <FiBell />
            <span>Notifications</span>
          </div>
          <div className={styles.notificationList}>
            <div className={styles.notificationItem}>
              <span className={styles.notificationDot}></span>
              <span className={styles.notificationText}>
                New assessment available
              </span>
            </div>
            <div className={styles.notificationItem}>
              <span className={styles.notificationDot}></span>
              <span className={styles.notificationText}>
                Course update: Web Development
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Section */}
      <div className={styles.sidebarFooter}>
        {!collapsed && (
          <>
            <NavLink to="/profile" className={styles.footerItem}>
              <FiUser />
              <span>Profile</span>
            </NavLink>
            <NavLink to="/settings" className={styles.footerItem}>
              <FiSettings />
              <span>Settings</span>
            </NavLink>
          </>
        )}
        <button onClick={handleLogout} className={styles.logoutBtn}>
          <FiLogOut />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}
