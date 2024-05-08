
let saveToken = (token: string, AdmId: number) => {
  localStorage.setItem('token', token);

  localStorage.setItem('AdmId', AdmId.toString()); 


}


let logout =() => {
  localStorage.removeItem('token');

  localStorage.removeItem('AdmId'); 
}

let isLogged = () => {
  let token =  localStorage.getItem('token');

  let AdmId = localStorage.getItem('AdmId'); 
  return !!token && !!AdmId; 
}
let getAdmId = () => {
  return localStorage.getItem('AdmId');

}



export const AdmService = {


  saveToken,
  logout,
  isLogged,
  getAdmId 
}

