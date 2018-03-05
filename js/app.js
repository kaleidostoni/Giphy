// TpMvjOB9w3I8NmO0nTEbu9eeMGp6WL4H
let $searchInput = $('#search-input');
let $gifDiv = $('#gif-div');

function loadPage () {
    $searchInput.keyup(getValue);
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
 console.log(gif);

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