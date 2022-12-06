let apiKey = "7921205a-ec44-43ed-a60e-fcceaf6224b2"
let codon = "ssafanovich:"
let encodedAPI = "c3NhZmFub3ZpY2g6NzkyMTIwNWEtZWM0NC00M2VkLWE2MGUtZmNjZWFmNjIyNGIy"


let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://frc-api.firstinspires.org/v3.0/c3NhZmFub3ZpY2g6NzkyMTIwNWEtZWM0NC00M2VkLWE2MGUtZmNjZWFmNjIyNGIy", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
