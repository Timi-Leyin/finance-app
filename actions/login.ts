import { postRequest } from "../config/axios";

export default async (details: any, callback: any) => {
  const login = await postRequest("/user/login", details, callback);
};
