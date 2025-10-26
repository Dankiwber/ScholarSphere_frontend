import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/profile/ProfileCard";
import AboutSection from "../components/profile/AboutSection";
import EducationSection from "../components/profile/EducationSection";
import ExperienceTimeline from "../components/profile/ExperienceTimeline";
import PublicationsList from "../components/profile/PublicationsList";
import {
  getJobsForUser,
  getRecommendedUsers,
  getPublicationsByUserId,
} from "../data/mockData";

/**
 * 主页组件
 * 显示用户的个人资料、教育背景、工作经历、出版物等信息
 * @returns {JSX.Element} 主页组件
 */
const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // 如果用户未登录，重定向到登录页面
  if (!user) {
    navigate("/login");
    return null;
  }

  const currentUser = user.profile;
  const availableJobs = getJobsForUser(user.id);
  const userPublications = getPublicationsByUserId(user.id);
  const recommendedUsers = getRecommendedUsers(user.id, 2);

  return (
    <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧主要内容区域 */}
        <div className="lg:col-span-2 space-y-8">
          <ProfileCard user={currentUser} isOwnProfile={true} />
          <AboutSection about={currentUser.bio} />
          <EducationSection education={currentUser.education} />
          <ExperienceTimeline experiences={currentUser.experience} />
          <PublicationsList
            publications={userPublications.map((pub) => ({
              id: pub.id,
              title: pub.title,
              authors: pub.authors.join(", "),
              venue: pub.venue,
              year: pub.year,
              citations: pub.citations,
              doi: pub.doi,
              pdfUrl: pub.pdfUrl,
              codeUrl: pub.codeUrl,
            }))}
          />
        </div>

        {/* 右侧边栏 */}
        <div className="lg:col-span-1 space-y-8">
          {/* 可用职位 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Available Positions
            </h2>
            <div className="space-y-4">
              {availableJobs.slice(0, 2).map((job) => (
                <div
                  key={job.id}
                  className={
                    job.id !== availableJobs[0].id
                      ? "border-t border-gray-200 pt-4"
                      : ""
                  }
                >
                  <h3 className="font-semibold text-indigo-600 hover:underline cursor-pointer">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600">{job.organization}</p>
                  <p className="text-xs text-gray-500">{job.location}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("/jobs")}
              className="mt-6 w-full text-center bg-indigo-100 text-indigo-700 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-200 transition-colors"
            >
              View all positions
            </button>
          </div>

          {/* 推荐学者 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Scholars You May Know
            </h2>
            <ul className="space-y-4">
              {recommendedUsers.map((recUser) => (
                <li key={recUser.id} className="flex items-center space-x-3">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={recUser.profile.avatar}
                    alt={recUser.profile.name}
                  />
                  <div className="flex-1">
                    <button
                      onClick={() => navigate(`/profile/${recUser.slug}`)}
                      className="font-semibold text-gray-800 hover:text-indigo-600 transition-colors"
                    >
                      {recUser.profile.name}
                    </button>
                    <p className="text-sm text-gray-500">
                      {recUser.profile.title}, {recUser.profile.organization}
                    </p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
