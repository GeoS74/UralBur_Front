(() => {
    const root = ReactDOM.createRoot(document.getElementById("slider"));

    function slider() {
        fetchAllImgSlider();
        return <div><p>привет</p></div>       
    }
    root.render(/*#__PURE__*/React.createElement(slider, null));
  })();


  async function fetchAllImgSlider() {
    try {
        const resp = await fetch('http://localhost:8080/api/mcontent/slider/public/search');
        if (resp.ok) {
            const json = await resp.json();
            console.log(json)}
    } catch (err) {
        console.log(err)
    }
  }

//   <div class="slider-item" style="background-image: url('images/industrial_hero_1.jpg');">
//         <div class="container">
//           <div class="row slider-text align-items-center justify-content-center">
//             <div class="col-lg-7 text-center col-sm-12 element-animate">
//               <div class="btn-play-wrap mx-auto"><p class="mb-4"><a href="https://vimeo.com/59256790" data-fancybox data-ratio="2" class="btn-play"><span class="ion ion-ios-play"></span></a></p></div>
//               <h1 class="mb-4"><span>We Are Industrial Company</span></h1>
//               <p class="mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iste ipsa excepturi nostrum sequi molestias?</p>
//             </div>
//           </div>
//         </div>
//       </div>