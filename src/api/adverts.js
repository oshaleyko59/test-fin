import axios from 'axios';
import BASE_URL from 'constants/baseURL';

//axios.defaults.baseURL = BASE_URL;

const getAll = async (page) => {
  const url = new URL(BASE_URL);
  url.searchParams.append('page', page);
  url.searchParams.append('limit', 8);
  const { data } = await axios.get(url);
  return data;
};

const getById = async advertId => {
  const { data } = await axios.get(`/${advertId}`);
  return data;
};

const getFiltered = async ({ make, rentalPrice, mileage }) => {
  const { data } = await axios.get(`?make=${make}&rentalPrice<${rentalPrice}&mileage=${mileage}`);
  return data;
};

const apiAdverts = { getAll, getById, getFiltered };

export default apiAdverts;
