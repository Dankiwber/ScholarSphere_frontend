import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateUsername,
} from "../utils/validators";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    studyField: "",
    organization: "",
    location: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // 验证用户名
    const usernameError = validateUsername(formData.username);
    if (usernameError) {
      setError(usernameError);
      return false;
    }

    // 验证邮箱
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setError(emailError);
      return false;
    }

    // 验证密码
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError(passwordError);
      return false;
    }

    // 验证确认密码
    const confirmPasswordError = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    );
    if (confirmPasswordError) {
      setError(confirmPasswordError);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      // Generate slug from name
      const generateSlug = (name) => {
        const uniqueId = Math.random().toString(36).substr(2, 9);
        return (
          name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim() +
          "-" +
          uniqueId
        );
      };

      // 模拟注册API调用
      // 在实际应用中，这里应该调用真实的API
      const newUser = {
        id: Date.now(), // 临时ID
        slug: generateSlug(formData.name || formData.username),
        username: formData.username,
        email: formData.email,
        password: formData.password, // 在实际应用中不应该存储明文密码
        profile: {
          name: formData.name || formData.username,
          title: "Student/Researcher",
          studyField: formData.studyField || "Computer Science",
          organization: formData.organization || "University",
          location: formData.location || "Unknown",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          bio: "New member of ScholarSphere",
          skills: [],
          publications: [],
          education: [],
          experience: [],
        },
        connections: 0,
        followers: 0,
        following: 0,
      };

      // 模拟API延迟
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 登录新用户
      login(newUser);
      navigate("/");
    } catch (error) {
      setError("注册失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div>
          <div className="flex justify-center items-center mb-6">
            <svg
              className="w-10 h-10 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v11.494m-9-5.747h18"
              ></path>
              <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
            </svg>
            <span className="ml-3 text-2xl font-bold text-gray-800">
              ScholarSphere
            </span>
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join the academic community and connect with researchers worldwide
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username *
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter password (min 8 chars, with uppercase, lowercase, and numbers)"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password *
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="studyField"
                className="block text-sm font-medium text-gray-700"
              >
                Research Field
              </label>
              <input
                id="studyField"
                name="studyField"
                type="text"
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g., Machine Learning, Computer Vision"
                value={formData.studyField}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-gray-700"
              >
                Institution
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g., MIT, Stanford University"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g., Boston, USA"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
