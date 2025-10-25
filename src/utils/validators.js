// 表单验证工具函数

/**
 * 验证必填字段
 * @param {any} value - 要验证的值
 * @param {string} fieldName - 字段名
 * @returns {string|null} 错误信息
 */
export const validateRequired = (value, fieldName = "This field") => {
  if (!value || (typeof value === "string" && value.trim() === "")) {
    return `${fieldName} is required`;
  }
  return null;
};

/**
 * 验证邮箱格式
 * @param {string} email - 邮箱地址
 * @returns {string|null} 错误信息
 */
export const validateEmail = (email) => {
  if (!email) return "Email is required";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }

  return null;
};

/**
 * 验证密码强度
 * @param {string} password - 密码
 * @returns {string|null} 错误信息
 */
export const validatePassword = (password) => {
  if (!password) return "Password is required";

  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }

  if (!/(?=.*[a-z])/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }

  if (!/(?=.*[A-Z])/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }

  if (!/(?=.*\d)/.test(password)) {
    return "Password must contain at least one number";
  }

  return null;
};

/**
 * 验证确认密码
 * @param {string} password - 原密码
 * @param {string} confirmPassword - 确认密码
 * @returns {string|null} 错误信息
 */
export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) return "Please confirm your password";

  if (password !== confirmPassword) {
    return "Passwords do not match";
  }

  return null;
};

/**
 * 验证用户名
 * @param {string} username - 用户名
 * @returns {string|null} 错误信息
 */
export const validateUsername = (username) => {
  if (!username) return "Username is required";

  if (username.length < 3) {
    return "Username must be at least 3 characters long";
  }

  if (username.length > 20) {
    return "Username must be less than 20 characters";
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return "Username can only contain letters, numbers, and underscores";
  }

  return null;
};

/**
 * 验证URL格式
 * @param {string} url - URL地址
 * @returns {string|null} 错误信息
 */
export const validateUrl = (url) => {
  if (!url) return null; // URL是可选的

  try {
    new URL(url);
    return null;
  } catch {
    return "Please enter a valid URL";
  }
};

/**
 * 验证电话号码
 * @param {string} phone - 电话号码
 * @returns {string|null} 错误信息
 */
export const validatePhone = (phone) => {
  if (!phone) return null; // 电话号码是可选的

  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""))) {
    return "Please enter a valid phone number";
  }

  return null;
};

/**
 * 验证文件大小
 * @param {File} file - 文件对象
 * @param {number} maxSize - 最大文件大小（字节）
 * @returns {string|null} 错误信息
 */
export const validateFileSize = (file, maxSize = 5 * 1024 * 1024) => {
  if (!file) return null;

  if (file.size > maxSize) {
    const maxSizeMB = maxSize / (1024 * 1024);
    return `File size must be less than ${maxSizeMB}MB`;
  }

  return null;
};

/**
 * 验证文件类型
 * @param {File} file - 文件对象
 * @param {string[]} allowedTypes - 允许的文件类型
 * @returns {string|null} 错误信息
 */
export const validateFileType = (
  file,
  allowedTypes = ["image/jpeg", "image/png", "image/gif"]
) => {
  if (!file) return null;

  if (!allowedTypes.includes(file.type)) {
    return `File type must be one of: ${allowedTypes.join(", ")}`;
  }

  return null;
};

/**
 * 验证数字范围
 * @param {number} value - 数值
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @param {string} fieldName - 字段名
 * @returns {string|null} 错误信息
 */
export const validateNumberRange = (value, min, max, fieldName = "Value") => {
  if (value === null || value === undefined || value === "") {
    return `${fieldName} is required`;
  }

  const num = Number(value);
  if (isNaN(num)) {
    return `${fieldName} must be a valid number`;
  }

  if (num < min) {
    return `${fieldName} must be at least ${min}`;
  }

  if (num > max) {
    return `${fieldName} must be no more than ${max}`;
  }

  return null;
};

/**
 * 验证文本长度
 * @param {string} text - 文本
 * @param {number} minLength - 最小长度
 * @param {number} maxLength - 最大长度
 * @param {string} fieldName - 字段名
 * @returns {string|null} 错误信息
 */
export const validateTextLength = (
  text,
  minLength,
  maxLength,
  fieldName = "Text"
) => {
  if (!text) return `${fieldName} is required`;

  if (text.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters long`;
  }

  if (text.length > maxLength) {
    return `${fieldName} must be no more than ${maxLength} characters long`;
  }

  return null;
};

/**
 * 验证日期
 * @param {string|Date} date - 日期
 * @param {string} fieldName - 字段名
 * @returns {string|null} 错误信息
 */
export const validateDate = (date, fieldName = "Date") => {
  if (!date) return `${fieldName} is required`;

  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) {
    return `${fieldName} must be a valid date`;
  }

  return null;
};

/**
 * 验证日期范围
 * @param {string|Date} startDate - 开始日期
 * @param {string|Date} endDate - 结束日期
 * @returns {string|null} 错误信息
 */
export const validateDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) return null;

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (start > end) {
    return "End date must be after start date";
  }

  return null;
};

/**
 * 组合验证器
 * @param {Function[]} validators - 验证器数组
 * @returns {Function} 组合后的验证器
 */
export const combineValidators = (...validators) => {
  return (value, ...args) => {
    for (const validator of validators) {
      const error = validator(value, ...args);
      if (error) return error;
    }
    return null;
  };
};
