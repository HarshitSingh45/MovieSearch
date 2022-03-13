var list = document.getElementById('list');
// display all the liked movies
        for(let i=0; i<localStorage.length; i++){
            // fetched data from local storage
            const id = localStorage.key(i);
            const value = localStorage.getItem(id);
            // display movie name and delete button
            list.innerHTML+='<div id="'+id+'" ><div class="f-movie" >'+value+'</div><button class="delete" onclick="removeMovie('+id+')">Delete</button></div';
            
        }
        // this function is used to remove move movies from the fav-movie & local storage
        function removeMovie(id){
            var key = id.getAttribute("id");
            // deleting the movie from the id of the movie
            localStorage.removeItem(key);
            location.reload();
            // console.log(localStorage);
            
        }