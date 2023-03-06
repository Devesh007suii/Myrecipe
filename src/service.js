const queryStrings={
    app_id: process.env.REACT_APP_APP_ID,
    app_key: process.env.REACT_APP_APP_KEY
    // this is how we import those ID from env file
    // we but process.env
}
// because its a synchronous func that's why we have to put 
// async function



// we took a parameter called defaultQuery
export const fetchData = async (defaultQuery) => {
    const {app_id,app_key} = queryStrings;
    // here we are destructuring the above const queryStrings
    try{
      const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`)
      //so this const data wil give a response and we are 
    //   storing it inside const responce
      const response = await data.json();
      // the data will store in the form of json inside responce
      return response;
    } //if there's any error we can catch it from here
    catch(e){
        console.log(e,"something went wrong")
        return e
    }
}

export const fetchTabData = async (defaultQuery) => {
    const {app_id,app_key} = queryStrings
    try{
      const data = await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`)
      const response = await data.json();
      return response;
    }
    catch(e){
        console.log(e,"something went wrong")
        return e
    }
}