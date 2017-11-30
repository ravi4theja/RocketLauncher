import axios from 'axios';

export const Fetch_Rockets = 'fetch_rockets';
export const Display_Rocket = 'display_rocket';

const Root_Url = 'https://launchlibrary.net/1.3/';

export function fetchRockets() {
  const request = axios.get(`${Root_Url}/launch/next/10`);
  return {
    type: Fetch_Rockets,
    payload: request
  }
}

export function displayRocket(rocket) {
  return {
    type: Display_Rocket,
    payload: rocket
  }
}