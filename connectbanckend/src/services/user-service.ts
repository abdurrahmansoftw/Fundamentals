import apiClient from "./api-client";

class UserService {
  getAllUsers() {
    const controller = new AbortController();
    apiClient.get<User[]>('/users', {
      signal: controller.signal,
    });
  }
}

export default new UserService();
