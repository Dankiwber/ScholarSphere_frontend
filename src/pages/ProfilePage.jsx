import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  getUserBySlug,
  getPublicationsByUserId,
  getRecommendedUsers,
} from "../data/mockData";
import ProfileCard from "../components/profile/ProfileCard";
import AboutSection from "../components/profile/AboutSection";
import ExperienceTimeline from "../components/profile/ExperienceTimeline";
import PublicationsList from "../components/profile/PublicationsList";

const ProfilePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();

  // Get user data by slug
  const profileUser = getUserBySlug(slug);

  if (!profileUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            User Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The user profile you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  // Get user's publications
  const userPublications = getPublicationsByUserId(profileUser.id);

  // Get recommended users (excluding current user and profile user)
  const recommendedUsers = getRecommendedUsers(profileUser.id, 3).filter(
    (recUser) => recUser.id !== currentUser?.id
  );

  // Check if this is the current user's own profile
  const isOwnProfile = currentUser?.id === profileUser.id;

  // Transform user data to match component expectations
  const profileData = {
    id: profileUser.id,
    slug: profileUser.slug,
    name: profileUser.profile.name,
    title: profileUser.profile.title,
    institution: profileUser.profile.organization,
    location: profileUser.profile.location,
    avatar: profileUser.profile.avatar,
    about: profileUser.profile.bio,
    experiences: profileUser.profile.experience,
    publications: userPublications.map((pub) => ({
      id: pub.id,
      title: pub.title,
      authors: pub.authors.join(", "),
      venue: pub.venue,
      year: pub.year,
      citations: pub.citations,
      doi: pub.doi,
      pdfUrl: pub.pdfUrl,
      codeUrl: pub.codeUrl,
    })),
    connections: profileUser.connections,
    followers: profileUser.followers,
    following: profileUser.following,
  };

  return (
    <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <ProfileCard user={profileData} isOwnProfile={isOwnProfile} />
          <AboutSection about={profileData.about} />
          <ExperienceTimeline experiences={profileData.experiences} />
          <PublicationsList publications={profileData.publications} />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {/* Profile Stats */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Profile Stats
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Connections</span>
                <span className="font-semibold">{profileData.connections}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Followers</span>
                <span className="font-semibold">{profileData.followers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Following</span>
                <span className="font-semibold">{profileData.following}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Publications</span>
                <span className="font-semibold">
                  {profileData.publications.length}
                </span>
              </div>
            </div>
          </div>

          {/* Recommended Scholars */}
          {recommendedUsers.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Recommended Scholars
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
          )}

          {/* Research Areas */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Research Areas
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {profileData.institution}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {profileUser.profile.studyField}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
