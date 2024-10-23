// import client from "./client";
import client from "./client";


export const getTIL = async (
  {pageNumber}
) => {
  return await client.get(`/api/tils?page=${pageNumber}`);
};


