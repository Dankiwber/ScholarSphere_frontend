import api from "./api";

class SearchService {
  async searchScholars(query, filters = {}) {
    try {
      const params = {
        q: query,
        ...filters,
      };
      const response = await api.get("/search/scholars", params);
      return response.scholars;
    } catch (error) {
      console.error("Search scholars failed:", error);
      throw error;
    }
  }

  async getRecommendedScholars(userId) {
    try {
      const response = await api.get(`/search/recommendations/${userId}`);
      return response.scholars;
    } catch (error) {
      console.error("Get recommended scholars failed:", error);
      throw error;
    }
  }

  async getScholarById(scholarId) {
    try {
      const response = await api.get(`/scholars/${scholarId}`);
      return response.scholar;
    } catch (error) {
      console.error("Get scholar by ID failed:", error);
      throw error;
    }
  }

  async getScholarsByInstitution(institution) {
    try {
      const response = await api.get("/search/scholars", { institution });
      return response.scholars;
    } catch (error) {
      console.error("Get scholars by institution failed:", error);
      throw error;
    }
  }

  async getScholarsByResearchArea(researchArea) {
    try {
      const response = await api.get("/search/scholars", { researchArea });
      return response.scholars;
    } catch (error) {
      console.error("Get scholars by research area failed:", error);
      throw error;
    }
  }

  async getSearchSuggestions(query) {
    try {
      const response = await api.get("/search/suggestions", { q: query });
      return response.suggestions;
    } catch (error) {
      console.error("Get search suggestions failed:", error);
      throw error;
    }
  }
}

export default new SearchService();
