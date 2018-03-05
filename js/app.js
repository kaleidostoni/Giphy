// TpMvjOB9w3I8NmO0nTEbu9eeMGp6WL4H
let $searchInput = $('#search-input');
let $gifDiv = $('#gif-div');

function loadPage () {
    $searchInput.keyup(getValue);
    secondRequest()
}

function secondRequest (){
    $.ajax({
        url: `http://api.giphy.com/v1/gifs/random?api_key=ZsqrinpWOAofm4Zz437ozggEVR4BDoYB`
    }).done(giantGif)
    .fail(jsonFail)
}

function giantGif (json) {
    let hugeGif = json.data.source_image_url;
// console.log(hugeGif);
//     let template = `<div style="background-image: url(${hugeGif});"></div>`;
//     $(template).css('background-image',template);
// console.log(template);
// $('#background').append($(template));
let background = document.getElementById('background');
console.log(background);
let div = document.createElement('div');
let image = document.createElement('img');

// image.style.backgroundImage = "url(" +hugeGif+ ")";
// image.style.backgroundSize = "cover";
image.src= hugeGif;
// image.classList.add("altisimo");
 div.appendChild(image);
 background.appendChild(div);

}

function getValue (){
    let $inputValue = $searchInput.val().trim();
    console.log($inputValue);
    searchGif($inputValue);
}

function searchGif ($inputValue){
    $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${$inputValue}&limit=5&api_key=ZsqrinpWOAofm4Zz437ozggEVR4BDoYB`
    }).done(getJSON)
    .fail(jsonFail)
}

function getJSON (json){
let gifs = json.data;

let template = ' ';

gifs.forEach(item =>{
 let gif = item.images.original.url;
 let gifId = item.id;
 console.log(gifId);

 template += `<div class="col l3 gif-container">
 <img src="${gif}">
 </div>`
});

$gifDiv.html(template);

}

function jsonFail (fail){
    console.log('lero lero');
}
    



$(document).ready(loadPage);