import React, { createContext, useContext, useReducer, useEffect } from "react";

// 主题常量定义
const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

// 初始状态
const initialState = {
  theme: THEMES.SYSTEM,
  isDark: false,
};

// Action类型常量
const THEME_ACTIONS = {
  SET_THEME: "SET_THEME",
  TOGGLE_THEME: "TOGGLE_THEME",
};

/**
 * 主题状态管理Reducer
 * @param {Object} state - 当前状态
 * @param {Object} action - 动作对象
 * @returns {Object} 新状态
 */
const themeReducer = (state, action) => {
  switch (action.type) {
    case THEME_ACTIONS.SET_THEME:
      return {
        ...state,
        theme: action.payload.theme,
        isDark: action.payload.isDark,
      };
    case THEME_ACTIONS.TOGGLE_THEME:
      const newTheme =
        state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
      return {
        ...state,
        theme: newTheme,
        isDark: newTheme === THEMES.DARK,
      };
    default:
      return state;
  }
};

// 创建主题上下文
const ThemeContext = createContext();

/**
 * 获取系统主题偏好
 * @returns {string} 系统主题偏好
 */
const getSystemTheme = () => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? THEMES.DARK
      : THEMES.LIGHT;
  }
  return THEMES.LIGHT;
};

/**
 * 应用主题到DOM元素
 * @param {string} theme - 主题名称
 * @param {boolean} isDark - 是否为暗色主题
 */
const applyTheme = (theme, isDark) => {
  if (typeof document !== "undefined") {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // 设置data属性用于CSS选择器
    root.setAttribute("data-theme", theme);
  }
};

/**
 * 主题上下文提供者组件
 * 管理应用的主题状态和切换功能
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.children - 子组件
 * @returns {JSX.Element} 主题上下文提供者
 */
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // 初始化主题设置
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const theme = savedTheme || THEMES.SYSTEM;

    let isDark = false;
    if (theme === THEMES.SYSTEM) {
      isDark = getSystemTheme() === THEMES.DARK;
    } else {
      isDark = theme === THEMES.DARK;
    }

    dispatch({
      type: THEME_ACTIONS.SET_THEME,
      payload: { theme, isDark },
    });
  }, []);

  // 监听系统主题变化
  useEffect(() => {
    if (state.theme === THEMES.SYSTEM) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e) => {
        const isDark = e.matches;
        dispatch({
          type: THEME_ACTIONS.SET_THEME,
          payload: { theme: THEMES.SYSTEM, isDark },
        });
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [state.theme]);

  // 应用主题到DOM
  useEffect(() => {
    applyTheme(state.theme, state.isDark);
  }, [state.theme, state.isDark]);

  /**
   * 设置主题
   * @param {string} theme - 主题名称
   */
  const setTheme = (theme) => {
    let isDark = false;
    if (theme === THEMES.SYSTEM) {
      isDark = getSystemTheme() === THEMES.DARK;
    } else {
      isDark = theme === THEMES.DARK;
    }

    dispatch({
      type: THEME_ACTIONS.SET_THEME,
      payload: { theme, isDark },
    });

    // 保存到本地存储
    localStorage.setItem("theme", theme);
  };

  /**
   * 切换主题（在亮色和暗色之间切换）
   */
  const toggleTheme = () => {
    const newTheme = state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme);
  };

  /**
   * 获取当前主题
   * @returns {string} 当前主题
   */
  const getCurrentTheme = () => {
    return state.theme;
  };

  /**
   * 检查是否为暗色主题
   * @returns {boolean} 是否为暗色主题
   */
  const isDarkMode = () => {
    return state.isDark;
  };

  const value = {
    theme: state.theme,
    isDark: state.isDark,
    setTheme,
    toggleTheme,
    getCurrentTheme,
    isDarkMode,
    themes: THEMES,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

/**
 * 主题上下文的自定义Hook
 * 提供主题状态和操作方法
 * @returns {Object} 主题上下文值
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
