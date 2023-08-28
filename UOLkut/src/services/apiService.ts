import axios from 'axios';

const API_URL = 'http://localhost:5000'


interface UserData {
  email: string;
  senha: string;
  name: string;
  profissao: string;
  pais: string;
  cidade: string;
  nascimento: string;
  relationship: string;
  uid?: string;
}

export const registerUser = (userData: UserData) => {
  return axios.post<UserData>(`${API_URL}/users`, userData);
};

export const getUserProfile = (uid: string) => {
  return axios.get<UserData>(`${API_URL}/users?uid=${uid}`,{
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',    
  }

  
})};  

export const updateUserProfile = (uid: string, updatedProfile: UserData) => {
  return axios.put<UserData>(`${API_URL}/users/${uid}`, updatedProfile, {
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',    
    }
  })};