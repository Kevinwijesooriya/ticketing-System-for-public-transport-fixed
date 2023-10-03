/* eslint-disable no-console */
import { axiosClient } from "../plugins/interceptors/AxiosClient";

class RouteScheduleAPI {
  static getOne = async (id) => {
    try {
      const response = await axiosClient().get(`/api/routeSchedule/get/${id}`);
      console.log("API ~ Route Schedule ~ getOne ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Route Schedule ~ getOne ", error);
      return error;
    }
  };

  static getAll = async () => {
    try {
      const response = await axiosClient().get("/api/routeSchedule/getAll");
      console.log("API ~ Route Schedule ~ getAll ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Route Schedule ~ getAll ", error);
      return error;
    }
  };

  static create = async (payload) => {
    try {
      const response = await axiosClient().post(
        "/api/routeSchedule/create",
        payload
      );
      console.log("API ~ Route Schedule ~ create ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Route Schedule ~ create ", error);
      return error;
    }
  };

  static update = async ({ id, payload }) => {
    try {
      const response = await axiosClient().put(
        `/api/routeSchedule/update/${id}`,
        payload
      );
      console.log("API ~ Route Schedule ~ update ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Route Schedule ~ update ", error);
      return error;
    }
  };

  static delete = async (emailId) => {
    try {
      const response = await axiosClient().delete(
        `/api/routeSchedule/delete/${emailId}`
      );
      console.log("API ~ Route Schedule ~ delete ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Route Schedule ~ delete ", error);
      return error;
    }
  };
  static addABus = async ({ id, payload }) => {
    try {
      const response = await axiosClient().put(
        `/api/routeSchedule/add-a-bus/${id}`,
        payload
      );
      console.log("API ~ Route Schedule ~ addABus ", response);
      return response;
    } catch (error) {
      console.log("ERROR-API ~ Route Schedule ~ addABus ", error);
      return error;
    }
  };
}
export default RouteScheduleAPI;
