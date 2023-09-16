import axios from 'axios';
import BASE_URL from 'constants/baseURL';

//axios.defaults.baseURL = BASE_URL;

const getAll = async page => {
  const url = new URL(BASE_URL);
  url.searchParams.append('page', page);
  url.searchParams.append('limit', 8);
  const { data } = await axios.get(url);
  return data;
};

const getById = async advertId => {
  const { data } = await axios.get(`${BASE_URL}/${advertId}`);
  return data;
};

const getListById = async list => {
  console.log('getListById>>>list', list);
  const { data } = await Promise.all(
    list.map(id => {
      console.log('getListById>>>id', `${BASE_URL}/${id}`);
      return axios.get(`${BASE_URL}/${id}`);
    })
  );
  //   .then(data => console.log(data));
  // console.log('getListById>>>data', data);
  return data;
};

const getFiltered = async ({ make, rentalPrice, mileage }) => {
  const { data } = await axios.get(
    `?make=${make}&rentalPrice<${rentalPrice}&mileage=${mileage}`
  );
  return data;
};

const apiAdverts = { getAll, getListById, getById, getFiltered };

export default apiAdverts;
