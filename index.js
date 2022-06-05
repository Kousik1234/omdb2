console.log("live");
let moives_div= document.getElementById('movies')
//key=462c6753
async function searchMovies(s){
    try{
        let url= `http://www.omdbapi.com/?s=${s}&apikey=462c6753`;
        let res= await fetch(url);
        let data=  await res.json();
        return data.Search;
    }
    catch(error){
    alert("No movie found");
    }
}

function appendMovies(movies){
 
    moives_div.innerHTML="";
    if(movies===undefined){
        return false;
    }

    movies.forEach(function(el){
        let p= document.createElement('p');
        p.innerText=el.Title;
        let image=document.createElement('img');
        image.src=el.Poster;
        let type= document.createElement('p');
        type.innerContent=el.Type;
        let year=document.createElement('p');
        year.innerText=el.Year;

        moives_div.append(p,image,type,year);
        // console.log(moives)
    })
}

async function main(){
    let search= document.getElementById('search').value;
    // console.log( search)
    let responce= searchMovies(search);
    let data= await responce;
    appendMovies(data)
    
}