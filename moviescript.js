var currentUrl = window.location.href;
let params = (new URL(currentUrl)).searchParams;
// getting the id of movie which user has clicked
var id = params.get("id");
// sending xhr request to get all details of that particular movies
var xhrRequest = new XMLHttpRequest();
xhrRequest.onload = function(){
    var responseJSON = JSON.parse(xhrRequest.response);
    // will fetch all data and display it on movieInfo page
    // title
    var title = responseJSON.Title;
    document.getElementById('name').innerText = title;
    // year
    var year = responseJSON.Year;
    document.getElementById('year').innerText = year;
    // releasedate
    var realeaseDate = responseJSON.Released;
    document.getElementById('release').innerText = realeaseDate;
    // runtime
    var runtime = responseJSON.Runtime;
    document.getElementById('duration').innerText = runtime;
    // genre
    var genre = responseJSON.Genre;
    document.getElementById('genre').innerText = genre;
    // director
    var director = responseJSON.Director;
    document.getElementById('director').innerText = director;
    // writer
    var writer = responseJSON.Writer;
    document.getElementById('writer').innerText = writer;
    // actors
    var actors = responseJSON.Actors;
    document.getElementById('actors').innerText=actors;
    // plot
    var plot = responseJSON.Plot;
    document.getElementById('plot').innerText = plot;
    // language
    var language = responseJSON.Language;
    document.getElementById('language').innerText = language;
    // awards
    var awards = responseJSON.Awards;
    // poster
    var poster = responseJSON.Poster;
    var url = document.getElementById('poster')
    url.setAttribute('src', poster);
}
xhrRequest.onerror = function(){
    console.log('Error Occured');
}
var apiurl = 'http://www.omdbapi.com/?apikey=9a845526&i='+id;
xhrRequest.open('get',apiurl);
xhrRequest.send();