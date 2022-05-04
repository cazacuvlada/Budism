var fullImgBoc = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var closetheImg ;

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";

}