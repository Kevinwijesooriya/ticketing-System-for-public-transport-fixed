/* eslint-disable no-console */
import { axiosClient } from "../plugins/interceptors/AxiosClient";

class InspectorsAPI {
  static getOne = async (id) => {
    try {
      const response = await axiosClient().get(`/api/inspector/get/${id}`);
      console.log("API ~ Inspector ~ getOne ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Inspector ~ getOne ", error);
      return error;
    }
  };

  static getAll = async () => {
    try {
      const response = await axiosClient().get("/api/inspector/getAll");
      console.log("API ~ Inspector ~ getAll ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Inspector ~ getAll ", error);
      return error;
    }
  };

  static create = async (payload) => {
    try {
      const response = await axiosClient().post(
        "/api/inspector/create",
        payload
      );
      console.log("API ~ Inspector ~ create ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Inspector ~ create ", error);
      return error;
    }
  };

  static update = async ({ id, payload }) => {
    try {
      const response = await axiosClient().put(
        `/api/inspector/update/${id}`,
        payload
      );
      console.log("API ~ Inspector ~ update ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Inspector ~ update ", error);
      return error;
    }
  };

  static delete = async (emailId) => {
    try {
      const response = await axiosClient().delete(
        `/api/inspector/delete/${emailId}`
      );
      console.log("API ~ Inspector ~ delete ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~Inspector ~ delete ", error);
      return error;
    }
  };
}
export default InspectorsAPI;
