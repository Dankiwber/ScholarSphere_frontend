import React, { createContext, useContext, useState, useEffect } from "react";

// 创建认证上下文
const AuthContext = createContext();

/**
 * 认证上下文的自定义Hook
 * 提供用户认证状态和操作方法
 * @returns {Object} 认证上下文值
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

/**
 * 认证上下文提供者组件
 * 管理用户登录状态和认证信息
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.children - 子组件
 * @returns {JSX.Element} 认证上下文提供者
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 检查本地存储中的用户信息
    const savedUser = localStorage.getItem("scholarsphere_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing saved user:", error);
        // 如果解析失败，清除损坏的数据
        localStorage.removeItem("scholarsphere_user");
      }
    }
    setLoading(false);
  }, []);

  /**
   * 用户登录
   * @param {Object} userData - 用户数据
   */
  const login = (userData) => {
    setUser(userData);
    // 保存用户信息到本地存储
    localStorage.setItem("scholarsphere_user", JSON.stringify(userData));
    localStorage.setItem("scholarsphere_user_slug", userData.slug);
  };

  /**
   * 用户登出
   */
  const logout = () => {
    setUser(null);
    // 清除本地存储的用户信息
    localStorage.removeItem("scholarsphere_user");
    localStorage.removeItem("scholarsphere_user_slug");
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
