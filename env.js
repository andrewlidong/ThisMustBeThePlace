const variables = {
  development: {
    googleApiKey: 'AIzaSyDBvPFzcSED2Vpi_G1RJQZnUNl0uSK_k5Q',
  },
  production: {
    googleApiKey: 'AIzaSyDBvPFzcSED2Vpi_G1RJQZnUNl0uSK_k5Q',
  },
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development; // return this if in development mode
  }
  return variables.production; // otherwise, return this
};

export default getEnvVariables; // export a reference to the function

// const vars = {
//   googleApiKey: 'AIzaSyDBvPFzcSED2Vpi_G1RJQZnUNl0uSK_k5Q',
// };

// export default vars;
