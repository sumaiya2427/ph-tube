console.log("index concceted");
function loadData() {
  // get the container
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // convert promise to json
    .then((res) => res.json())
    // sent data to display
    .then((data) => displayCategories(data.categories));
}
const leadCategoryVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category));
};
function displayCategories(categories) {
  const cetagoryContainer = document.getElementById("cetagoryContainer");

  for (let cat of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `<button onclick="leadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`;
    cetagoryContainer.append(categoryDiv);
  }
}
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}
// {
//   "category_id": "1001",
//   "video_id": "aaag",
//   "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
//   "title": "Sunrise Reverie",
//   "authors": [
//       {
//           "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
//           "profile_name": "Ava Johnson",
//           "verified": false
//       }
//   ],
//   "others": {
//       "views": "1.1K",
//       "posted_date": "16950"
//   },
//   "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
// }
const displayVideos = (videos) => {
  const videoconainer = document.getElementById("videoContainer");
  videoconainer.innerHTML = "";
  if (videos.length == 0) {
    videoconainer.innerHTML = ` <div
        class="py-20 col-span-full text-center flex flex-col justify-center items-center"
      >
        <img class="w-[120px]" src="assets/Icon.png" alt="" />
        <h2 class="text-2xl font-bold">
          Oops!! Sorry, There is no content here
        </h2>
      </div>`;
    return;
  }
  videos.forEach((video) => {
    console.log(video);
    // title add
    const videoCard = document.createElement("div");
    videoCard.innerHTML = ` <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
          <span
            class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="flex gap-3 px-0 py-5">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>
          <div class="intro">
            <h2 class="text-sm font-semibold">Midnight Serenade</h2>
            <p class="text-sm text-gray-400 flex gap-1">
              ${video.authors[0].profile_name}
              <img
                class="w-5 h-5"
                src="https://img.icons8.com/?size=64&id=6xO3fnY41hu2&format=png"
                alt=""
              />
            </p>
            <p class="text-sm text-gray-400"> ${video.others.views}</p>
          </div>
        </div>
      </div>`;
    videoconainer.append(videoCard);
  });
};

// call kora function
loadData();
