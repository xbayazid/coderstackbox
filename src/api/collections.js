/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//get all homes
export const getAllCollections = async () => {
    const url = `https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/collections`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
      },
    })
    const collections = await response.json()
  
    return collections
  }

  