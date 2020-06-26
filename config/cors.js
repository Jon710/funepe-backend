const Env = use('Env');

module.exports = {
  /*
  | Origin
  |--------------------------------------------------------------------------
  | Set a list of origins to be allowed. The value can be one of the following
  | Boolean: true - Allow current request origin
  | Boolean: false - Disallow all
  | String - Comma separated list of allowed origins
  | Array - An array of allowed origins
  | String: * - A wildcard to allow current request origin
  | Function - Receives the current origin and should return one of the above values.
  */
  origin(currentOrigin) {
    if (Env.get('NODE_ENV​') === 'production') {
      return currentOrigin === 'https://funepe-frontend.herokuapp.com';
    }
    return true;
  },
  // origin: [
  //   'https://funepe-frontend.herokuapp.com',
  //   'http://localhost:3000/',
  //   'https://funepe-backend.herokuapp.com',
  //   'https://funepe-backend.herokuapp.com/sessions',
  // ],

  /*
  | Methods
  |--------------------------------------------------------------------------
  | HTTP methods to be allowed. The value can be one of the following
  | String - Comma separated list of allowed methods
  | Array - An array of allowed methods
  */
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],

  /*
  | Headers
  | List of headers to be allowed via Access-Control-Request-Headers header.
  | The value can be one of the following.
  | Boolean: true - Allow current request headers
  | Boolean: false - Disallow all
  | String - Comma separated list of allowed headers
  | Array - An array of allowed headers
  | String: * - A wildcard to allow current request headers
  | Function - Receives the current header and should return one of the above values.
  */
  headers: true,

  /*
  | Expose Headers
  | A list of headers to be exposed via `Access-Control-Expose-Headers`
  | header. The value can be one of the following.
  | Boolean: false - Disallow all
  | String: Comma separated list of allowed headers
  | Array - An array of allowed headers
  |
  */
  exposeHeaders: false,

  /*
  | Credentials
  |
  | Define Access-Control-Allow-Credentials header. It should always be a
  | boolean.
  |
  */
  credentials: true,

  /*
  | MaxAge
  | Define Access-Control-Allow-Max-Age
  */
  maxAge: 90,
};
