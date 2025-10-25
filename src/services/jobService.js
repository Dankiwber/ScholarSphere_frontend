import api from "./api";

class JobService {
  async getJobs(filters = {}) {
    try {
      const response = await api.get("/jobs", filters);
      return response.jobs;
    } catch (error) {
      console.error("Get jobs failed:", error);
      throw error;
    }
  }

  async getJobById(jobId) {
    try {
      const response = await api.get(`/jobs/${jobId}`);
      return response.job;
    } catch (error) {
      console.error("Get job by ID failed:", error);
      throw error;
    }
  }

  async createJob(jobData) {
    try {
      const response = await api.post("/jobs", jobData);
      return response.job;
    } catch (error) {
      console.error("Create job failed:", error);
      throw error;
    }
  }

  async updateJob(jobId, jobData) {
    try {
      const response = await api.put(`/jobs/${jobId}`, jobData);
      return response.job;
    } catch (error) {
      console.error("Update job failed:", error);
      throw error;
    }
  }

  async deleteJob(jobId) {
    try {
      await api.delete(`/jobs/${jobId}`);
    } catch (error) {
      console.error("Delete job failed:", error);
      throw error;
    }
  }

  async applyToJob(jobId, applicationData) {
    try {
      const response = await api.post(`/jobs/${jobId}/apply`, applicationData);
      return response.application;
    } catch (error) {
      console.error("Apply to job failed:", error);
      throw error;
    }
  }

  async getJobApplications(jobId) {
    try {
      const response = await api.get(`/jobs/${jobId}/applications`);
      return response.applications;
    } catch (error) {
      console.error("Get job applications failed:", error);
      throw error;
    }
  }

  async getMyApplications() {
    try {
      const response = await api.get("/jobs/my-applications");
      return response.applications;
    } catch (error) {
      console.error("Get my applications failed:", error);
      throw error;
    }
  }

  async getJobCategories() {
    try {
      const response = await api.get("/jobs/categories");
      return response.categories;
    } catch (error) {
      console.error("Get job categories failed:", error);
      throw error;
    }
  }
}

export default new JobService();
