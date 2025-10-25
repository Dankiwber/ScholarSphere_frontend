import api from "./api";

class NetworkService {
  async getConnections(userId) {
    try {
      const response = await api.get(`/network/${userId}/connections`);
      return response.connections;
    } catch (error) {
      console.error("Get connections failed:", error);
      throw error;
    }
  }

  async getInvitations(userId) {
    try {
      const response = await api.get(`/network/${userId}/invitations`);
      return response.invitations;
    } catch (error) {
      console.error("Get invitations failed:", error);
      throw error;
    }
  }

  async sendConnectionRequest(userId, targetUserId, message = "") {
    try {
      const response = await api.post(`/network/${userId}/invitations`, {
        targetUserId,
        message,
      });
      return response.invitation;
    } catch (error) {
      console.error("Send connection request failed:", error);
      throw error;
    }
  }

  async acceptInvitation(userId, invitationId) {
    try {
      const response = await api.post(
        `/network/${userId}/invitations/${invitationId}/accept`
      );
      return response.connection;
    } catch (error) {
      console.error("Accept invitation failed:", error);
      throw error;
    }
  }

  async rejectInvitation(userId, invitationId) {
    try {
      await api.post(`/network/${userId}/invitations/${invitationId}/reject`);
    } catch (error) {
      console.error("Reject invitation failed:", error);
      throw error;
    }
  }

  async removeConnection(userId, connectionId) {
    try {
      await api.delete(`/network/${userId}/connections/${connectionId}`);
    } catch (error) {
      console.error("Remove connection failed:", error);
      throw error;
    }
  }

  async getNetworkStats(userId) {
    try {
      const response = await api.get(`/network/${userId}/stats`);
      return response.stats;
    } catch (error) {
      console.error("Get network stats failed:", error);
      throw error;
    }
  }

  async getMutualConnections(userId, targetUserId) {
    try {
      const response = await api.get(
        `/network/${userId}/mutual/${targetUserId}`
      );
      return response.connections;
    } catch (error) {
      console.error("Get mutual connections failed:", error);
      throw error;
    }
  }

  async getSuggestedConnections(userId) {
    try {
      const response = await api.get(`/network/${userId}/suggestions`);
      return response.suggestions;
    } catch (error) {
      console.error("Get suggested connections failed:", error);
      throw error;
    }
  }

  async searchConnections(userId, query) {
    try {
      const response = await api.get(`/network/${userId}/search`, { q: query });
      return response.connections;
    } catch (error) {
      console.error("Search connections failed:", error);
      throw error;
    }
  }
}

export default new NetworkService();
