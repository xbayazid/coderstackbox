/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//get all homes
export const getAllCollections = async () => {
    const url = `http://localhost:5000/collections`;

  const {
    data: collections = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["collections"],
    queryFn: async () => {
      const res = await axios.get(url, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
        },
      });
      return res.data;
    },
  });
  }

  