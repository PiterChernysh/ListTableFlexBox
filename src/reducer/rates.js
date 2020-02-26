const reducer = (rates = {}, { type, payload }) => {
  switch (type) {
    case "SET_RATES":
      rates = payload;
      return rates;
    default:
      return rates;
  }
};

export default reducer;
