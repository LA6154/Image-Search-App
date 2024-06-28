let ACCESS_KEY="1YYpsSszdLrQF83F-5LZ_EFVaA9MJXKikj-14-4Zpcc";
let searchInput=document.getElementById("searchInput");
let searchBtn=document.getElementById("searchBtn");
let showData=document.querySelector(".showData");
let moreBtn=document.getElementById("moreBtn");

let page= 1;


const getData= async(searchValue, pageNo)=>{
    let fetching=await fetch(`https://api.unsplash.com/search/photos/?query=${searchValue}&per_page=28&p=${pageNo}age&client_id=${ACCESS_KEY}`);
    let jsonData=await fetching.json();
    console.log(jsonData.results);
if(pageNo ===1){
showData.innerHTML=""
}
if(searchInput.value==""){
    showData.innerHTML=`
    <h1>Please Search</h1>
    `
}
else{
document.querySelector(".loadMore").style.display="block";
}

   jsonData.results.forEach((data) => {
    console.log(data);

    let div=document.createElement("div");
    div.classList.add("card");
    showData.appendChild(div);

    div.innerHTML=`
     <img src=${data.urls.small} alt="">
     <a href=${data.links.html} target="_blank">${data.alt_description}</a>
    `
   })
}

searchBtn.addEventListener("click",function(){
    let searchValue=searchInput.value;
    getData(searchValue ,1)
})
moreBtn.addEventListener("click",function(){
    let searchValue=searchInput.value;
    getData(searchValue, page++)
})
