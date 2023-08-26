<script setup>
import { ref } from "vue";
import { reactive } from "vue";

const navs = [
  {
    teks: "HOME",
    url: "/",
  },
  {
    teks: "SHOP",
    url: "/Shop",
  },
  {
    teks: "TIPS",
    url: "/Tips",
  },
];
const specialTips = [
  {
    judul: "Anti sakit perut club1",
    urlGambar: new URL("/src/assets/specialtips01.png", import.meta.url).href,
    tiplist: [
      "Konsumsi makanan yang mudah dicerna",
      "Makan dengan pelan pelan",
      "Konsumsi makan yang kaya serat",
      "Hindari makanan yang pedas dan asam",
      "Jangan menunda waktu makan",
      "Minum air putih yang cukup",
    ],
  },
  {
    judul: "Anti sakit perut club2",
    urlGambar: new URL("/src/assets/tips1.png", import.meta.url).href,
    tiplist: [
      "Konsumsi makanan yang mudah dicerna",
      "Makan dengan pelan pelan",
      "Konsumsi makan yang kaya serat",
      "Hindari makanan yang pedas dan asam",
      "Jangan menunda waktu makan",
      "Minum air putih yang cukup",
    ],
  },
  {
    judul: "Anti sakit perut club3",
    urlGambar: new URL("/src/assets/tips2.png", import.meta.url).href,
    tiplist: [
      "Konsumsi makanan yang mudah dicerna",
      "Makan dengan pelan pelan",
      "Konsumsi makan yang kaya serat",
      "Hindari makanan yang pedas dan asam",
      "Jangan menunda waktu makan",
      "Minum air putih yang cukup",
    ],
  },
  {
    judul: "Anti sakit perut club4",
    urlGambar: new URL("/src/assets/tips3.png", import.meta.url).href,
    tiplist: [
      "Konsumsi makanan yang mudah dicerna",
      "Makan dengan pelan pelan",
      "Konsumsi makan yang kaya serat",
      "Hindari makanan yang pedas dan asam",
      "Jangan menunda waktu makan",
      "Minum air putih yang cukup",
    ],
  },
  {
    judul: "Anti sakit perut club",
    urlGambar: new URL("/src/assets/specialtips01.png", import.meta.url).href,
    tiplist: [
      "Konsumsi makanan yang mudah dicerna",
      "Makan dengan pelan pelan",
      "Konsumsi makan yang kaya serat",
      "Hindari makanan yang pedas dan asam",
      "Jangan menunda waktu makan",
      "Minum air putih yang cukup",
    ],
  },
];
const currentST = ref(1);
const tips = [
  {
    judul: "menyimpan daging agar tahan lama",
    urlGambar: new URL("/src/assets/tips1.png", import.meta.url).href,
    tiplist: [
      "Konsumsi makanan yang mudah dicerna",
      "Makan dengan pelan pelan",
      "Konsumsi makan yang kaya serat",
      "Hindari makanan yang pedas dan asam",
      "Jangan menunda waktu makan",
      "Minum air putih yang cukup",
    ],
  },
  {
    judul: "vegetarian snack from terong",
    urlGambar: new URL("/src/assets/tips2.png", import.meta.url).href,
    tiplist: [
      "Konsumsi makanan yang mudah dicerna",
      "Makan dengan pelan pelan",
      "Konsumsi makan yang kaya serat",
      "Hindari makanan yang pedas dan asam",
      "Jangan menunda waktu makan",
      "Minum air putih yang cukup",
    ],
  },
  {
    judul: "manfaat sawi putih untuk anak",
    urlGambar: new URL("/src/assets/tips3.png", import.meta.url).href,
    tiplist: [
      "Konsumsi makanan yang mudah dicerna",
      "Makan dengan pelan pelan",
      "Konsumsi makan yang kaya serat",
      "Hindari makanan yang pedas dan asam",
      "Jangan menunda waktu makan",
      "Minum air putih yang cukup",
    ],
  },
  {
    judul: "tip1 jadi kurus dalam 1 detik",
    urlGambar: new URL("/src/assets/tips1.png", import.meta.url).href,
    tiplist: [
      "Konsumsi makanan yang mudah dicerna",
      "Makan dengan pelan pelan",
      "Konsumsi makan yang kaya serat",
      "Hindari makanan yang pedas dan asam",
      "Jangan menunda waktu makan",
      "Minum air putih yang cukup",
    ],
  },
  {
    judul: "tip2 jadi kurus dalam 1 detik",
    urlGambar: new URL("/src/assets/tips2.png", import.meta.url).href,
    tiplist: [
      "Konsumsi makanan yang mudah dicerna",
      "Makan dengan pelan pelan",
      "Konsumsi makan yang kaya serat",
      "Hindari makanan yang pedas dan asam",
      "Jangan menunda waktu makan",
      "Minum air putih yang cukup",
    ],
  },
  {
    judul: "tip3 jadi kurus dalam 1 detik",
    urlGambar: new URL("/src/assets/tips3.png", import.meta.url).href,
    tiplist: [
      "Konsumsi makanan yang mudah dicerna",
      "Makan dengan pelan pelan",
      "Konsumsi makan yang kaya serat",
      "Hindari makanan yang pedas dan asam",
      "Jangan menunda waktu makan",
      "Minum air putih yang cukup",
    ],
  },
];
const topTips = tips.slice(0, 3);

function toggleMenu() {
  var element = document.getElementById("hamBtn");
  element.classList.toggle("close");
  var element = document.getElementById("nav");
  element.classList.toggle("open");
}
const currentActiveTips = ref(0);
const currentActiveSpecialTips = ref(0);

function openTipsdtl(index) {
  document.getElementById("tipsdtl").classList.add("open");
  currentActiveTips.value = index;
}
function openSpecialTipsdtl(index) {
  document.getElementById("specialtipsdtl").classList.add("open");
  currentActiveSpecialTips.value = index;
}
function closeTipsdtl() {
  document.getElementById("tipsdtl").classList.remove("open");
}
function closeSpecialTipsdtl() {
  document.getElementById("specialtipsdtl").classList.remove("open");
}

// setInterval(() => {
//   if (currentST.value === specialTips.length) {
//     currentST.value = 1;
//   }else{
//     currentST.value++;
//   }
// }, 3000)
// function changeCurrentST(){
// var activeDot = document.querySelector('#dot'+currentST.value)
//   var element = document.getElementById(activeDot);
//   element.classList.toggle("active");
// }
</script>

<template>
  <nav class="bg-greenka relative z-50 shadow-md">
    <div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
      <div
        class="text-white w-full md:w-1/4 font-medium mt-4 md:mt-0 text-2xl md:text-xl order-3 md:order-none text-center"
      >
        <hr class="h-0.5 bg-white block md:hidden" />
        TIPS FROM US
        <hr class="h-0.5 bg-white block md:hidden" />
      </div>
      <router-link
        to="/"
        class="flex items-center mx-auto w-1/2 md:w-auto md:justify-center"
      >
        <img
          src="../assets/kitaanterinlogo5.png"
          class="h-12 md:h-20"
          alt="Kita Anterin Logo"
        />
      </router-link>
      <div
        class="flex items-center justify-end md:justify-center w-1/2 md:hidden"
      >
        <button
          id="hamBtn"
          type="button"
          class="text-sm rounded-sm"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div id="nav" class="hidden md:block w-full md:w-1/4" style="top: 7rem">
        <ul
          class="flex flex-col justify-end font-medium m-4 rounded-lg bg-black bg-opacity-50 md:bg-opacity-0 backdrop-blur-sm md:backdrop-blur-none md:flex-row md:space-x-8 md:m-0 md:border-0 md:bg-transparent"
        >
          <li v-for="nav in navs">
            <router-link
              :to="nav.url"
              class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
              >{{ nav.teks }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="max-w-screen-xl mx-auto bg-white">
    <div class="m-6 md:m-12 mb-12 md:mb-24 md:flex md:gap-8 md:items-center">
      <div class="relative mb-4 md:mb-0">
        <button class="block" @click="openSpecialTipsdtl(currentST - 1)">
          <div>
            <img
              :src="specialTips[currentST - 1].urlGambar"
              :alt="'gambar' + specialTips[currentST - 1].judul"
              class="h-120 ratio-3/2 object-cover"
            />
          </div>
          <div
            class="text-white text-left font-semibold absolute left-0 bottom-0 right-0 p-4 md:p-8 bg-black bg-opacity-50"
          >
            <div class="text-2xl">Edisi puasa</div>
            <div class="text-xl">{{ specialTips[currentST - 1].judul }}</div>
          </div>
        </button>
        <div
          class="absolute flex gap-1 bottom-3 right-3 md:bottom-6 md:right-6"
        >
          <div
            v-for="(s, index) in specialTips"
            :key="index"
            :id="'dot' + (index + 1)"
            class="w-2 h-2 bg-white rounded-full"
            @click="currentST = index + 1"
          ></div>
        </div>
        <button
          class="absolute text-7xl top-1/2 -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white grid place-items-center rounded-full p-2"
          @click="currentST--"
          :disabled="currentST === 1"
        >
          <img src="../assets/toleft.svg" class="w-6 h-6 pr-2" alt="" />
        </button>
        <button
          class="absolute text-7xl top-1/2 -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white grid place-items-center rounded-full p-2"
          @click="currentST++"
          :disabled="currentST === specialTips.length"
        >
          <img src="../assets/toright.svg" class="w-6 h-6 pl-2" alt="" />
        </button>

        <!-- STdtl -->
        <div
          class="fixed z-50 bg-black bg-opacity-20 backdrop-blur-sm inset-0 hidden px-4 sm:px-12 items-center"
          id="specialtipsdtl"
        >
          <div class="absolute inset-0" @click="closeSpecialTipsdtl"></div>
          <div
            class="bg-white grid sm:grid-cols-2 place-items-center sm:rounded-l-3xl sm:rounded-br-3xl mx-auto h-full w-full max-w-sm sm:max-w-screen-md max-h-screen overflow-y-auto relative"
          >
            <div
              class="flex flex-col items-center gap-4 bg-greenka p-4 sm:p-8 md:p-12 sm:rounded-l-3xl h-full w-full"
            >
              <img src="../assets/kitaanterinlogo4.png" class="w-20" />
              <img
                :src="specialTips[currentActiveSpecialTips].urlGambar"
                class="h-52 sm:h-full md:h-96 object-cover rounded-3xl w-full"
                alt=""
              />
            </div>
            <div class="p-4 sm:p-8 bg-tipdtl self-stretch w-full">
              <h4
                class="text-base sm:text-lg md:text-2xl mb-2 sm:mb-8 capitalize font-PFD"
              >
                {{ specialTips[currentActiveSpecialTips].judul }}
              </h4>
              <div class="text-sm sm:text-base md:text-xl">
                <p
                  class="mb-2 sm:mb-4"
                  v-for="(tip, index) in specialTips[currentActiveSpecialTips]
                    .tiplist"
                >
                  <span>{{ index + 1 + ". " }}</span
                  >{{ tip }}
                </p>
              </div>
            </div>
            <button
              id="productclosebtn"
              class="absolute top-2 right-2 text-white bg-slate-200 p-2 rounded-3xl"
              @click="closeSpecialTipsdtl"
            >
              <img src="../assets/closebtn.svg" class="w-4 h-4" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="md:h-120 md:overflow-y-auto">
        <button
          class="flex items-center gap-3 md:gap-6 overflow-hidden mb-4 md:mb-8"
          v-for="(tipsitem, index) in tips"
          @click="openTipsdtl(index)"
        >
          <img
            :src="tipsitem.urlGambar"
            class="object-cover h-28 sm:h-36 md:h-32 lg:h-36 ratio-5/4"
            :alt="'gambar ' + tipsitem.judul"
          />

          <div class="font-medium sm:font-semibold text-left">
            <div class="xs:text-xl sm:text-2xl md:text-lg">Tips!!</div>
            <div class="xs:text-lg sm:text-xl md:text-base">
              {{ tipsitem.judul }}
            </div>
          </div>
        </button>

        <!-- dtl -->

        <div
          class="fixed z-50 bg-black bg-opacity-20 backdrop-blur-sm inset-0 hidden px-4 sm:px-12 items-center"
          id="tipsdtl"
        >
          <div class="absolute inset-0" @click="closeTipsdtl"></div>
          <div
            class="bg-white grid sm:grid-cols-2 place-items-center sm:rounded-l-3xl sm:rounded-br-3xl mx-auto h-full w-full max-w-sm sm:max-w-screen-md max-h-screen overflow-y-auto relative"
          >
            <div
              class="flex flex-col items-center gap-4 bg-greenka p-4 sm:p-8 md:p-12 sm:rounded-l-3xl h-full w-full"
            >
              <img src="../assets/kitaanterinlogo4.png" class="w-20" />
              <img
                :src="tips[currentActiveTips].urlGambar"
                class="h-52 sm:h-full md:h-96 object-cover rounded-3xl w-full"
                alt=""
              />
            </div>
            <div class="p-4 sm:p-8 bg-tipdtl self-stretch w-full">
              <h4
                class="text-base sm:text-lg md:text-2xl mb-2 sm:mb-8 capitalize font-PFD"
              >
                {{ tips[currentActiveTips].judul }}
              </h4>
              <div class="text-sm sm:text-base md:text-xl">
                <p
                  class="mb-2 sm:mb-4"
                  v-for="(tip, index) in tips[currentActiveTips].tiplist"
                >
                  <span>{{ index + 1 + ". " }}</span
                  >{{ tip }}
                </p>
              </div>
            </div>
            <button
              id="productclosebtn"
              class="absolute top-2 right-2 text-white bg-slate-200 p-2 rounded-3xl"
              @click="closeTipsdtl"
            >
              <img src="../assets/closebtn.svg" class="w-4 h-4" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.bg-tipdtl {
  background: url(../assets/bgtips.svg) bottom / 100% no-repeat;
}
</style>
