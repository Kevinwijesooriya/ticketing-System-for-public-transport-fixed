/* eslint-disable no-console */
import { axiosClient } from "../plugins/interceptors/AxiosClient";

class DrivesAPI {
  static getOne = async (id) => {
    try {
      const response = await axiosClient().get(`/api/driver/get/${id}`);
      console.log("API ~ Driver ~ getOne ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Driver ~ getOne ", error);
      return error;
    }
  };

  static getAll = async () => {
    try {
      const response = await axiosClient().get("/api/driver/getAll");
      console.log("API ~ Driver ~ getAll ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Driver ~ getAll ", error);
      return error;
    }
  };

  static create = async (payload) => {
    try {
      const response = await axiosClient().post(
        "/api/driver/register",
        payload
      );
      console.log("API ~ Driver ~ create ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Driver ~ create ", error);
      return error;
    }
  };

  static update = async ({ id, payload }) => {
    try {
      const response = await axiosClient().put(
        `/api/driver/update/${id}`,
        payload
      );
      console.log("API ~ Driver ~ update ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Driver ~ update ", error);
      return error;
    }
  };

  static delete = async (emailId) => {
    try {
      const response = await axiosClient().delete(
        `/api/driver/delete/${emailId}`
      );
      console.log("API ~ Driver ~ delete ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~Driver ~ delete ", error);
      return error;
    }
  };
}
export default DrivesAPI;
