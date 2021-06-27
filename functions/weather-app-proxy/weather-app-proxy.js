const process = require('process')

const axios = require('axios')
const qs = require('qs')

const handler = async function (event) {
  // apply our function to the queryStringParameters and assign it to a variable
  const BASE_URL = 'https://api.openweathermap.org/';
  const API_PARAMS = qs.stringify(event.queryStringParameters);
  const pathArr = event.path.split('/');
  const path = pathArr.slice(4).join('/');

  // Get env var values defined in our Netlify site UI

  // TODO: customize your URL and API keys set in the Netlify Dashboard
  // this is secret too, your frontend won't see this
  const { API_SECRET } = process.env
  // const URL = isCurrent ? 
  //           `https://api.openweathermap.org/data/2.5/weather?units=metrics&appid=${API_SECRET}&${API_PARAMS}` :
  //           `https://api.openweathermap.org/data/2.5/forecast/daily?units=metrics&appid=${API_SECRET}&${API_PARAMS}`;
  const URL = `${BASE_URL}/${path}?appid=${API_SECRET}&${API_PARAMS}`;


  console.log(URL);
  try {
    const { data } = await axios.get(URL)
    // refer to axios docs for other methods if you need them
    // for example if you want to POST data:
    //    axios.post('/user', { firstName: 'Fred' })
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    }
  }
}

module.exports = { handler }
