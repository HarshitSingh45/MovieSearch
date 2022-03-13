var sbtn = document.getElementById('search-btn');
var mContainer = document.getElementById('all-movies-container');
var mbox = document.getElementById('all-movies-container');

//  when search movie button is clicked
sbtn.addEventListener('click', searchMovie);
function searchMovie(e){
    var movieName = document.getElementById('input').value;
    // setting innerhtml to be null, so that if user searched for another movie on same page , then only those results will be displayed
    mbox.innerHTML="";
    e.preventDefault();
    mContainer.style.display = 'block';
    // setting up xml http request
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function(){
        var responseJSON = JSON.parse(xhrRequest.response);
        // all the searched movies will be stored into movies
        var movies = responseJSON.Search;
        for(let movie of movies){
            // iterating over each movie to display
            console.log(movie.Title);
            // featching all details of movie
            let mtitle = movie.Title;
            let poster = movie.Poster;
            let type = movie.Type;
            let year = movie.Year;
            let id = movie.imdbID;
            // mbox.innerHTML+='<a href="movieinfo.html?id='+id+'" target="_blank"><div class="movie-box"><div class="poster"><img src="'+poster+'" class="poster-img"></div><div class="movie-details"><p><span class="span-title">Movie-Name : </span><span class="span-detail">'+mtitle+'</span></p><p><span class="span-title">Release-Year : </span><span class="span-detail">'+year+'</span></p><p><span class="span-title">Movie-Type : </span><span class="span-detail">'+type+'</span></p><input type="text" id="movieID" value="'+id+'" style="display: none;"></input></div></a><div class="favourites" title="'+mtitle+'" id="'+id+'" onclick="addfavmovie('+id+')"><br><br><br><span class="heart-btn"><i class="fa-solid fa-heart"></i></i></span></div></div>'
            //  adding each searched movie results
            mbox.innerHTML+= `<a href="movieinfo.html?id=${id}" target="_blank">
                                <div class="movie-box">
                                   <div class="poster">
                                       <img src="${poster}" class="poster-img">
                                    </div>
                                    <div class="movie-details">
                                       <p><span class="span-title">Movie-Name : </span><span class="span-detail">${mtitle}</span></p>
                                       <p><span class="span-title">Release-Year : </span><span class="span-detail">${year}</span></p>
                                       <p><span class="span-title">Movie-Type : </span><span class="span-detail">${type}</span></p>
                                       <input type="text" id="movieID" value="${id}" style="display: none;"></input>
                                    </div>
                               </a>
                                    <div class="favourites" title="${mtitle}" id="${id}" onclick="addfavmovie(${id})">
                                      <br><br><br><span class="heart-btn"><i class="fa-solid fa-heart"></i></i></span>
                                    </div>
                                </div>`      
        }
    }
    xhrRequest.onerror=function(){
        console.log('Error');
    }
    //  url of api on which we are requesting for info
    var apiurl = 'http://www.omdbapi.com/?apikey=9a845526&s='+movieName;
    // using get request to fetch all movies related to the users search
    xhrRequest.open('get',apiurl);
    xhrRequest.send();
}
// this function is used to add liked movies into favorite movies section
function addfavmovie(id){
    // console.log(id);
    id.style.color = 'red';
    var name = id.getAttribute("title");
    var mid = id.getAttribute("id");
    // console.log(name);
    // storing the liked movies into local storage
    localStorage.setItem(mid, name);
    // console.log(localStorage)
    // localStorage.clear();
    // console.log(localStorage)
    var favList = document.getElementById('animation');
    // inserting the liked movies into the favorite movie web page
    favList.innerHTML+='<div class="f-movie" id+"'+mid+'"><p> '+name+' </p></div>';
}