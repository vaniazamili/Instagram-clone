// TODO: answer here
import axios from 'axios';
import { API_URL } from './config';
  
export const getProfile = async(idUser) => {
    const data = await axios.get(
        API_URL+`/profile/${idUser}`,
        { withCredentials: true }
        )
      .then((response) => response.data);
  
      return data ? data : []
}
  
  // // const 