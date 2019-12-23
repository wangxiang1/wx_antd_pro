import axios from 'axios';
import request from '../utils/request';

export async function ticketValidate(ssoURL) {
  return axios
    .get(ssoURL)
    .then(resp => {
      return resp.data;
    })
    .catch(err => {
      console.log(err); // eslint-disable-line
    });
  // return request(ssoURL, {
  //   method: 'GET',
  // });
}

export async function getAccessToken(code) {
  return request(`${COPNETPATH}/sso/callback?code=${code}`);
}

// export function getTicketValidate(ticket) {
//   const service = encodeURIComponent(`${CLIENT_HOST}/#/sso/callback`);
//   return `${SSO_SERVER}/p3/serviceValidate?service=${service}&ticket=${ticket}&format=JSON`;
// }

export async function login() {
  return request(`${COPNETPATH}/sso/login`, {
    method: 'POST',
  });
}

export async function logout() {
  return request(`${COPNETPATH}/logout`, {
    method: 'POST',
  });
}
