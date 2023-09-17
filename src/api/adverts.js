import axios from 'axios';
import BASE_URL from 'constants/baseURL';

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

const getListById = async (list) => {
  const results = await Promise.allSettled(list.map(id => axios.get(`${BASE_URL}/${id}`)));
  const resData = [];
  for (const result of results) {
    if (result.status === 'fulfilled') {
      const data = await result.value.data;
      resData.push(data);
    }
  }

  return resData;
};


const getFiltered = async ({ make, rentalPrice, mileage }) => {
  const { data } = await axios.get(
    `?make=${make}&rentalPrice<${rentalPrice}&mileage=${mileage}`
  );
  return data;
};

const apiAdverts = { getAll, getListById, getById, getFiltered };

export default apiAdverts;
