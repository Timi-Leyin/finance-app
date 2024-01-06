import { getRequest } from "../config/axios";

export default async (details: any, callback: any) => {
  const getBalance = await getRequest(
    "/wallet/manage-wallet-balance",
    details,
    callback
  );
};
