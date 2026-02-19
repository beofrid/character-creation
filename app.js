

// function changeName()
// {
//   const p = document.getElementById("pElement");
//   const input = document.getElementById("input-name");
//   p.innerHTML = input.value;


// }

// function colorChange() 
// {
//   const background = 
//   [ "radial-gradient(circle, #fafafa 0%, #aedaed 100%)", 
//     "radial-gradient(circle, #303030 0%, #101010 100%)",
//     "linear-gradient(#0414ee, #ff7b00)", 
//     "linear-gradient(to bottom, #000700, #066e03)",
//     "linear-gradient(45deg, #010320, #380606)",
//     "linear-gradient(0deg, #0414ee, #3cccdf, #0414ee)",
//     "linear-gradient(0deg, #fdfdff, #000000)",
//     "#fff",
//     "#202020"
//    ]
//   const randomIndex = Math.floor(Math.random() * background.length);
//   const cP = document.getElementById("characterPreview");
//   cP.style.background = background[randomIndex];




// }

// function changeImg(idLayer, newImgSrc) 
// {
//     const layer = document.getElementById(idLayer);
//     layer.src = newImgSrc;   
// }

// function saveCharacter() {
//     const state = {
//         name: document.getElementById('input-name').value,
//         skin: document.getElementById('skin').src,
//         head: document.getElementById('head').src,
//         clothes: document.getElementById('clothes').src
//     };

//     localStorage.setItem("character", JSON.stringify(state));
// }

// function loadCharacter() {
//     const savedData = localStorage.getItem('character');

//     if (savedData) {
//         const status = JSON.parse(savedData);

//         // Restaurar o nome
//         if (status.name) {
//             document.getElementById('input-name').value = status.name;
//             document.querySelector('p').inne =  status.name;
//         }

//         // Restaurar as imagens das camadas
//         document.getElementById('skin').src = status.skin;
//         document.getElementById('head').src = status.head;
//         document.getElementById('clothes').src = status.clothes;
//     }
// }
