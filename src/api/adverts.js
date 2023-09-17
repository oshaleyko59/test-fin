import axios from 'axios';
import BASE_URL from 'constants/baseURL';

const getAll = async page => {
  const url = new URL(BASE_URL);
  url.searchParams.append('page', page);
  url.searchParams.append('limit', 8);
  const { data } = await axios.get(url);
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


const getFiltered = async ({ make }) => {
  console.log('getFiltered>>>', make);
  const url = new URL(BASE_URL);
  url.searchParams.append('make', make);
  const { data } = await axios.get(url);
  return data;
};

const apiAdverts = { getAll, getListById, getFiltered };

export default apiAdverts;
