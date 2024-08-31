let Container = document.getElementById("data-container");
let box = document.getElementById("add-container");
let Count = document.getElementById("count");

async function Load1() {
    let res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    let data = await res.json();
    console.log(data);
    display(data.posts);
}

let display = (data) => {
    data.forEach((element, index) => {
        let Div = document.createElement('div');
        
        Div.innerHTML = `
        <div class="flex gap-6 bg-base-100 max-w-2xl h-[270px] rounded-3xl shadow-xl">
                <div class="w-[72px]">
                    <img src="${element.image}" class="w-full rounded-2xl" />
                </div>
                <div>
                <div class="flex gap-4 mb-3 text-gray-400">
                        <h1>${element.category}</h1>
                        <h1>${element.author.name}</h1>
                    </div>
                  <h2 class="text-xl mulish-bold mb-4">${element.title}</h2>
                  <p class="mb-12">${element.description}</p>
                  <div class="flex justify-between items-center w-[580px] p-4">
                    <div class="flex gap-5">
                        <div>
                            <i class="fa-solid fa-message"></i>
                            <span>${element.comment_count}</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-eye"></i>
                            <span>${element.view_count}</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-clock"></i>
                            <span>${element.posted_time}</span>
                        </div>
                      </div>
                      <div>
                        <button class="btn rounded-full bg-[#10B981] push-button" data-index="${index}">
                          <i class="fa-regular fa-envelope"></i>
                        </button>
                      </div>
                  </div>
                </div>
              </div>
        `;
        
        Container.appendChild(Div);
    });

    
    let buttons = document.querySelectorAll(".push-button");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            let index = event.currentTarget.dataset.index;
            console.log("Clicked button index:", index);
            let element = data[index];
            console.log("Element:", element);
            
            if (element) {
                let value = parseInt(Count.innerText);
                value = value + 1;
                Count.innerText = value;

                
                 DIV = document.createElement("div");
                DIV.classList.add("flex", "gap-3", "w-[230px]");
                DIV.innerHTML = `
                <div>${element.title}</div>
                 <div class="flex items-center gap-3">
                     <i class="fa-solid fa-eye"></i><span>${element.view_count}</span>
                 </div>
                `;
                box.appendChild(DIV);
            } else {
                console.error("Element not found for index:");
            }
        });
    });
};

let Load2=async ()=>{
    let res=await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    let data=await res.json();
    display2(data)
    console.log(data)
}
let display2=(data)=>{
    let l_container=document.getElementById("Latest-container");
    data.forEach((value)=>{
        let DIV=document.createElement('div');
        DIV.classList="card bg-base-100 w-96 p-6 rounded-3xl shadow-xl";
        DIV.innerHTML=`
         <figure class="">
              <img
                src="${value.cover_image}"
                class="w-[326px] rounded-2xl" />
            </figure>
            <div class="card-body">
                <div class="flex gap-2 items-center text-gray-400">
                    <i class="fa-solid fa-calendar"></i>
                    <p>${value.author.posted_date?value.author.posted_date:"Not published"}</p>
                </div>
              <h2 class="mulish-extrabold text-[18px] text-[#12132D]">${value.title}</h2>
              <p>${value.description}</p>
              <div class="card-actions ">
                <div class="flex gap-4 items-center">
                    <div>
                        <img src="${value.profile_image}" alt="" class="w-11 rounded-full">
                    </div>
                    <div>
                        <h1 class="mulish-extrabold text-[18px] text-[#12132D]">${value.author.name}</h1>
                        <h3 class="text-[16px]">${value.author.designation?value.author.designation:"unknown"}</h3>
                    </div>
                </div>
              </div>
            </div>
        
        
        `
        l_container.appendChild(DIV)
    })
}
Load2()

Load1();

SearchbtnHandaller = () => {
    // Functionality for search button handler
};
