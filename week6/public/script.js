const populateDogs = () => {
  const dogContainer = document.getElementById("dogs-container");

  dogContainer.innerHTML = "";

  // Make a get request to the API on the server to get the list of dogs.
  // we will do this using axios

  let dogsPromise = axios.get("/api/dogs");

  // axios returns a promise
  // once the promise has settled... then do something with it

  dogsPromise.then(results=>{
    results.data.forEach(dog=>{
      dogContainer.innerHTML+=`
      <li>${dog.name}</li>
      `;
    });

  })
  .catch(error=>console.log(error));


}

populateDogs();

const submitDogHandler = (event)=>{
  event.preventDefault();

  let dogName = document.getElementById("dogName").value;
  let dogType = document.getElementById("dogType").value;
  let newestDogContainer = document.getElementById("newest-dog-container");


  axios.post("/api/dogs", {name:dogName, type:dogType})
  .then(results=>{
    populateDogs(); // update dog list with new dog


    newestDogContainer.innerHTML = `
      <div>Name: ${dogName}</div>
      <div>Type: ${dogType}</div>
    `;

    let imagePromise = axios.get(`https://dog.ceo/api/breed/${dogType.toLowerCase()}/images`)
    
    return imagePromise;

  })
  .then(results=>{
    newestDogContainer.innerHTML+=`
    <img alt="${dogName}" src="${results.data.message[0]}">

    `;
   
  })
  .catch(error=>console.log(error));

};