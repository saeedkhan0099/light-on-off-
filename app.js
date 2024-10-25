// function leighton(){
//     var image=document.getElementById('image');
//     if(image == ('on')){
//         image.src = "./light off.png"

//     }else{
//         image.src ="./light on.png"
//     }
// }
function leighton() {
    var image = document.getElementById('image');
    if (image.src.match("on")) {
      image.src = "./of.gif";
    } else {
      image.src ="./on.gif";
    }
  }