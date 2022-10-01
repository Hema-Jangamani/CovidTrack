const initialState = {
  uesrData:{},
  loginStatus: false,
  covidData:[],
  countryData: [],
  loading:false,
  IsWatch:false,
  watchCountries:[],
  IsSearch:false,
  searchCountry:null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CovidDataStatus": {
      return {
        ...state,
        covidData: action.value,
      };
    }

    case "CountryDataStatus": {
      return {
        ...state,
        countryData: action.value,
      };
    }

    case "UserDataStatus": {
      return {
        ...state,
        userData:action.value
      };
    }

    case "LoginStatus": {
      return {
        ...state,
       loginStatus:action.value
      };
    }

    case "LoadingStatus": {
      return {
        ...state,
       loading:action.value
      };
    }

    case "WatcherViewStatus": {
      return {
        ...state,
       loading:action.value
      };
    }


    case "IsWatchStatus": {
      return {
        ...state,
       IsWatch:action.value
      };
    }
  

    
    case "WatchCountriesStatus": {
      return {
        ...state,
        watchCountries:action.value
      };
    }

    case "IsSearchStatus": {
      return {
        ...state,
        IsSearch:action.value
      };
    }
  

    case "SearchCountryStatus": {
      return {
        ...state,
        searchCountry:action.value
      };
    }
  

    default: {
      return state;
    }
  }
};

export { initialState };
export default reducer;
