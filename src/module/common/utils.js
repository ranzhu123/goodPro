import querystring from 'querystring';
export const getQueryString = () => {
  return querystring.decode(location.href.split('?')[1]);
};
export const loadingControl = () => {

};
export default {
};
