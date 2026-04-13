import axios from "axios";

export const fetch_data = async (api_url) => {
  try {
    const get_data = async () => {
      const req = await axios.get(api_url);
      const data = await req.data;
      return await data;
    };
    return get_data();
  } catch (err) {
    throw Error("Someting Went Wrong");
  }
};
