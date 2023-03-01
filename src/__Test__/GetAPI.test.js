import axios from "axios";
import { BASE_URL, fetchUsers } from "./utils";

jest.mock("axios");

describe("Return users list", () => {
  describe("Successful API call", () => {
    it("should return users list", async () => {
      const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Andrew" },
      ];
      axios.get.mockResolvedValueOnce(users);

      const result = await fetchUsers();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual(users);
    });
  });

  describe("API call failed", () => {
    it("should return empty users list", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await fetchUsers();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual([]);
    });
  });
});
