import React from "react";

/**
 * 工作经历时间线组件
 * 显示用户的工作经历
 * @param {Object} props - 组件属性
 * @param {Array} props.experiences - 工作经历数组
 * @returns {JSX.Element} 工作经历时间线组件
 */
const ExperienceTimeline = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Experience</h2>
      <ul className="space-y-6 border-l-2 border-gray-200 ml-2">
        {experiences.map((exp, index) => (
          <li key={index} className="relative pl-8">
            <div
              className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-white ${
                index === 0 ? "bg-indigo-500" : "bg-gray-300"
              }`}
            ></div>
            <p className="font-semibold text-gray-800">{exp.position}</p>
            <p className="text-sm text-gray-600">{exp.company}</p>
            {exp.location && (
              <p className="text-xs text-gray-500">{exp.location}</p>
            )}
            <p className="text-xs text-gray-500">{exp.duration}</p>
            {exp.description && (
              <p className="mt-2 text-sm text-gray-600">{exp.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceTimeline;
