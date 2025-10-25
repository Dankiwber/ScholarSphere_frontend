import api from "./api";

class ProfileService {
  async getProfile(userId) {
    try {
      const response = await api.get(`/profiles/${userId}`);
      return response.profile;
    } catch (error) {
      console.error("Get profile failed:", error);
      throw error;
    }
  }

  async updateProfile(userId, profileData) {
    try {
      const response = await api.put(`/profiles/${userId}`, profileData);
      return response.profile;
    } catch (error) {
      console.error("Update profile failed:", error);
      throw error;
    }
  }

  async getPublications(userId, page = 1, limit = 10) {
    try {
      const response = await api.get(`/profiles/${userId}/publications`, {
        page,
        limit,
      });
      return response.publications;
    } catch (error) {
      console.error("Get publications failed:", error);
      throw error;
    }
  }

  async addPublication(userId, publicationData) {
    try {
      const response = await api.post(
        `/profiles/${userId}/publications`,
        publicationData
      );
      return response.publication;
    } catch (error) {
      console.error("Add publication failed:", error);
      throw error;
    }
  }

  async updatePublication(userId, publicationId, publicationData) {
    try {
      const response = await api.put(
        `/profiles/${userId}/publications/${publicationId}`,
        publicationData
      );
      return response.publication;
    } catch (error) {
      console.error("Update publication failed:", error);
      throw error;
    }
  }

  async deletePublication(userId, publicationId) {
    try {
      await api.delete(`/profiles/${userId}/publications/${publicationId}`);
    } catch (error) {
      console.error("Delete publication failed:", error);
      throw error;
    }
  }

  async getExperience(userId) {
    try {
      const response = await api.get(`/profiles/${userId}/experience`);
      return response.experience;
    } catch (error) {
      console.error("Get experience failed:", error);
      throw error;
    }
  }

  async addExperience(userId, experienceData) {
    try {
      const response = await api.post(
        `/profiles/${userId}/experience`,
        experienceData
      );
      return response.experience;
    } catch (error) {
      console.error("Add experience failed:", error);
      throw error;
    }
  }

  async updateExperience(userId, experienceId, experienceData) {
    try {
      const response = await api.put(
        `/profiles/${userId}/experience/${experienceId}`,
        experienceData
      );
      return response.experience;
    } catch (error) {
      console.error("Update experience failed:", error);
      throw error;
    }
  }

  async deleteExperience(userId, experienceId) {
    try {
      await api.delete(`/profiles/${userId}/experience/${experienceId}`);
    } catch (error) {
      console.error("Delete experience failed:", error);
      throw error;
    }
  }
}

export default new ProfileService();
