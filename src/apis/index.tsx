import { getCall } from "../utils/utils";
export const fetchData = async () => {
    const response = await getCall("https://randomuser.me/api/?results=90");
    return response?.data?.results;
  };