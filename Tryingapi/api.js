let apiKey = "7921205a-ec44-43ed-a60e-fcceaf6224b2"
let codon = "ssafanovich:"
let encodedAPI = "c3NhZmFub3ZpY2g6NzkyMTIwNWEtZWM0NC00M2VkLWE2MGUtZmNjZWFmNjIyNGIy"


fetch("https://frc-api.firstinspires.org/v2.0/" + apiKey)
.then(data => data.json)
.then(data => console.log(data))