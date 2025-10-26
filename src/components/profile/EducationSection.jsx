import React from "react";

/**
 * 教育背景组件
 * 显示用户的教育经历
 * @param {Object} props - 组件属性
 * @param {Array} props.education - 教育经历数组
 * @returns {JSX.Element} 教育背景组件
 */
const EducationSection = ({ education }) => {
  if (!education || education.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
      <ul className="space-y-4">
        {education.map((edu, index) => (
          <li
            key={index}
            className="border-b border-gray-100 pb-4 last:border-b-0"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.institution}</p>
                <p className="text-xs text-gray-500">{edu.year}</p>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  edu.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : edu.status === "In Progress"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {edu.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationSection;
