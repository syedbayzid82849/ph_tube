// categories set 
function loadCategories() {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories));
};
function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((response)=>response.json())
    .then((data)=>displayVideos(data.videos));
    
};
function loadCategoriesVideos(id){
  const url =`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url);
  fetch(url)
    .then(res=>res.json())
    .then(data=>displayVideos(data.category))
};


function displayCategories(categories) {
     const categoriesContainer = document.getElementById('categories-container');
     const categoriesContainerSm = document.getElementById('categories-container-sm')

    for(const cat of categories){
      console.log(cat );

        // lg screen categories
        const categorieDiv = document.createElement('div');
        categorieDiv.innerHTML = `
        <button onclick="loadCategoriesVideos(${cat.category_id})" class="btn hover:bg-red-500 hover:text-white bg-[#dedede] px-5 py-2 duration-400 text-lg">${cat.category}</button>
        `;
        categoriesContainer.appendChild(categorieDiv);
        // sm  screen categories
        const categorieDivSm = document.createElement('div');
        categorieDivSm.innerHTML = `
        <button class=" hover:bg-red-500 hover:text-white  px-5 py-2 duration-400 text-lg rounded-xl">${cat.category}</button>
        `;
        categoriesContainerSm.appendChild(categorieDivSm);
    }
}

const displayVideos =(videos)=>{

    const videosContainer = document.getElementById('videos-container');
    videosContainer.innerHTML="";
    if(videos.length==0){
      videosContainer.innerHTML=`
        <div class="flex justify-center items-center flex-col py-30 ">
          <img src="assets/Icon.png" alt="">
          <h1 class="text-2xl font-extrabold text-center pt-5">Oops!! Sorry,<br> There is no content here</h1>
        </div>
      `
      return;
    }

    videos.forEach((video)=>{
      const videoCard = document.createElement('div');
      videoCard.innerHTML=`
      <div class="card ">
        <figure class="relative ">
          <img class="w-full h-[200px] rounded-lg object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute bottom-2 right-2 text-white bg-black pb-1 px-1 text-sm rounded ">
              3hrs 56 min ago
            </span>
        </figure>
        <div class="flex gap-4 pb-3">
          <div class="pt-5">
            <div class="avatar">
              <div class="ring-primary ring-offset-base-100 w-12 rounded-full   ">
                <img src="${video.authors[0].profile_picture}" />
              </div>
            </div>
          </div>
          <div class=" py-3 ">
            <h2 class="card-title">${video.title}</h2>
            <div class="flex gap-2">
              <p class="text-gray-500">${video.authors[0].profile_name}</p>
              <img class="w-6 " src="https://img.icons8.com/?size=48&id=85097&format=png">
            </div>
            <p class="text-gray-500">${video.others.views}  Views</p>
          </div>
        </div>
      </div>
      `
      videosContainer.appendChild(videoCard);
    });
};
loadCategories();
