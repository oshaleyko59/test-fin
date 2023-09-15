import axios from 'axios';
import BASE_URL from 'constants/baseURL';

axios.defaults.baseURL = BASE_URL;

const getAll = async () => {
  const { data } = await axios.get('/');
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


//https://www.amazon.com/s?k=calico+critters&rh=n%3A165793011%2Cp_n_age_range%3A165890011&dc&ds=v1%3AueBUTSlP4w4YE205OqJHSyvnpaEgtP1fE5BXjxp7Ifc&crid=2WHJNX197UO2A&qid=1694715572&rnid=165794011&sprefix=calico%2Caps%2C177&ref=sr_nr_p_n_age_range_2
//https://www.amazon.com/s?k=calico+critters&i=toys-and-games&rh=n%3A165793011%2Cp_n_age_range%3A165890011%2Cp_36%3A1253560011&dc&ds=v1%3Amp%2FQJJ1epYqe1iG2Ad%2BXvCP5Vv1skMBL%2F6UfBpeD9TQ&crid=2WHJNX197UO2A&qid=1694715706&rnid=386491011&sprefix=calico%2Caps%2C177&ref=scx_alster_rib_desktop_fp_s_3
