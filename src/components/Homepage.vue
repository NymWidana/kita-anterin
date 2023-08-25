<script setup>
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

function toggleMenu() {
  var element = document.getElementById("hamBtn");
  element.classList.toggle("close");
  var element = document.getElementById("nav");
  element.classList.toggle("open");
}

const partnersandsupplies = [
  {
    name: "jendranathlogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/jendranathlogo.png", import.meta.url).href,
  },
  {
    name: "ragamlogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/ragamlogo.png", import.meta.url).href,
  },
  {
    name: "kinlogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/kinlogo.png", import.meta.url).href,
  },
  {
    name: "bagibaginasilogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/bagibaginasilogo.png", import.meta.url).href,
  },
  {
    name: "letspikniklogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/letspikniklogo.png", import.meta.url).href,
  },
  {
    name: "awanibalilogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/awanibalilogo.png", import.meta.url).href,
  },
  {
    name: "yellowskyhlogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/yellowskylogo.png", import.meta.url).href,
  },
  {
    name: "electricwheellogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/electricwheellogo.png", import.meta.url).href,
  },
  {
    name: "ideplogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/ideplogo.png", import.meta.url).href,
  },
  {
    name: "kalanayalogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/kalanayalogo.png", import.meta.url).href,
  },
  {
    name: "thecocoongardenlogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/thecocoongardenlogo.png", import.meta.url).href,
  },
  {
    name: "thehulalogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/thehulalogo.png", import.meta.url).href,
  },
  {
    name: "ipbilogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/ipbilogo.png", import.meta.url).href,
  },
  {
    name: "hazelcrumbslogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/hazelcrumbslogo.png", import.meta.url).href,
  },
  {
    name: "bakulfantasilogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/bakulfantasilogo.png", import.meta.url).href,
  },
  {
    name: "dlkitchenlogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/dlkitchenlogo.png", import.meta.url).href,
  },
  {
    name: "basomawarlogo",
    urlgambar:new URL( "/src/assets/logopartnersandsupplies/basomawarlogo.png", import.meta.url).href,
  },
];
</script>

<template>
    <header class="bg-banner relative z-50">
    <nav class="border-gray-200 from-60-black-to-transparent">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <router-link to="/" class="flex items-center">
          <img
            src="../assets/kitaanterinlogo.png"
            class="h-12 mr-3"
            alt="Kita Anterin Logo"
          />
        </router-link>
        <div class="flex items-center">
          <button
            id="hamBtn"
            type="button"
            class="text-sm rounded-sm md:hidden"
            @click="toggleMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div id="nav" class="hidden md:block md:w-auto">
          <ul
            class="flex flex-col font-medium rounded-lg bg-black bg-opacity-50 m-4 md:bg-opacity-0 backdrop-blur-sm md:backdrop-blur-none md:flex-row md:space-x-8 md:m-0 md:border-0 md:bg-transparent"
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
  </header>

  <!-- banner -->
  <div class="bg-banner h-banner relative -z-50">
    <div
      class="text-white font-thin text-5xl sm:text-8xl lg:text-9xl flex items-center h-full w-full justify-center fixed -translate-y-16 sm:-translate-y-20 font-PFD"
    >
      WELCOME
    </div>
  </div>

  <!-- content -->
  <div class="bg-white mx-auto max-w-screen-xl pt-12 md:pt-24">
    <!-- about -->
    <div class="m-4 md:m-8 mb-12 md:mb-24">
      <div
        class="bg-greenka rounded-bl-4xl md:rounded-tr-4xl relative flex flex-col md:flex-row items-end"
      >
        <div class="bg-white p-4 md:p-8">
          <div class="w-fit mb-6">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-PFD font-medium">
              KITA ANTERIN
            </h1>
            <hr class="h-1 bg-black" />
            <p>Delivering Goodnes, Sustaining Communities</p>
          </div>
          <div class="text-sm sm:text-xl text-justify">
            <p class="mb-6">
              Kita Anterin adalah bisnis layanan yang didirikan pada tahun 2020
              selama pandemi COVID-19. Awal berdiri berfokus untuk membantu
              penjual sayur dan pengemudi yang terkena dampak PSBB.
            </p>
            <p class="mb-6">
              kami menghubungkan masyarakat, mendorong pertumbuhan ekonomi, dan
              mengadvokasi praktik-praktik yang ramah lingkungan.
            </p>
            <p class="mb-6">
              Dengan menyediakan layanan pengantaran yang dapat diandalkan,
              memberdayakan pengusaha lokal, dan membina kolaborasi,Kita Anterin
              bertujuan untuk berkontribusi pada kesejahteraan ekonomi lokal
              dengan mempromosikan gerakan masa depan yang lebih hijau dan
              inklusif.
            </p>
          </div>
          <div
            class="text-sm md:ml-auto mt-36 md:mt-20 relative text-black z-50 w-3/6 sm:w-fit"
          >
            <hr class="bg-black h-0.5" />
            Stay at home, we'll shop for you
          </div>
        </div>
        <img
          class="h-72 md:h-96 -mt-48 md:-ml-8 z-10 md:h7/8"
          src="../assets/petani.png"
          alt="farmer"
        />
      </div>
    </div>

    <!-- activity -->
    <div class="my-12 md:my-24">
      <div class="mx-2 sm:mx-8 md:mx-16 mb-12 md:mb-24">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl underline mb-4 md:mb-8 mx-4 sm:mx-0"
        >
          AKTIVITAS SAAT INI
        </h2>
        <div class="flex items-center mb-4 md:mb-8">
          <img
            src="../assets/communitymarket.svg"
            class="h-16 sm:h-20 lg:h-32 px-6 md:px-12 lg:px-24 py-2"
            alt=""
          />
          <div class="w-full">
            <div
              class="bg-greenka2 text-white p-4 w-8/10 rounded-r-3xl lg:h-32"
            >
              <h3 class="font-semibold text-base md:text-lg lg:text-2xl">
                Comunity Market
              </h3>
              <p class="text-sm lg:text-base">
                Kegiatan Sukarelawan Workshop/Event, Program Magang
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center mb-4 md:mb-8">
          <img
            src="../assets/memasokkebutuhan.svg"
            class="h-16 sm:h-20 lg:h-32 px-6 md:px-12 lg:px-24 py-2"
            alt=""
          />
          <div class="w-full">
            <div
              class="bg-greenka2 text-white p-4 w-9/10 rounded-r-3xl lg:h-32"
            >
              <h3 class="font-semibold text-base md:text-lg lg:text-2xl">
                Memasok Kebutuhan Pelanggan
              </h3>
              <p class="text-sm lg:text-base">
                Memberikan layanan dan produk terbaik untuk pelanggan kami, QC
                produk dan praktik berkelanjutan.
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center mb-4 md:mb-8">
          <img
            src="../assets/communitycollab.svg"
            class="h-16 sm:h-20 lg:h-32 px-6 md:px-12 lg:px-24 py-2"
            alt=""
          />
          <div class="w-full">
            <div
              class="bg-greenka2 text-white p-4 w-full rounded-r-3xl lg:h-32"
            >
              <h3 class="font-semibold text-base md:text-lg lg:text-2xl">
                Community Collaboration
              </h3>
              <p class="text-sm lg:text-base">
                Mempromosikan produk petani, mengembangkan ruang untuk berbagi
                pengetahuan dengan komunitas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-9 md:mx-18 lg:mx-36">
        <div
          class="grid grid-flow-row sm:grid-flow-col gap-7 md:gap-14 lg:gap-28 mb-4 md:mb-8"
        >
          <img src="../assets/act1.png" class="" alt="" />
          <img src="../assets/act2.png" class="" alt="" />
          <img src="../assets/act3.png" class="" alt="" />
        </div>
        <h3 class="text-lg md:text-xl lg:text-2xl font-bold text-center">
          SATURDAY CORNER - COMMUNITY MARKET
        </h3>
      </div>
    </div>

    <!-- partners and supplies -->
    <div class="my-12 md:my-24">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl bg-greenka2 text-white p-2 text-center rounded-3xl mx-4 md:mx-8 mb-8 md:mb-16"
      >
        PARTNERS AND SUPPLIES
      </h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 place-items-center gap-8 md:gap-16 mx-9 md:mx-18 lg:mx-36"
      >
        <img
          v-for="partnerorsupply in partnersandsupplies"
          :src="partnerorsupply.urlgambar"
          :alt="partnerorsupply.name"
          class="max-h-24"
        />
      </div>
    </div>

    <!-- delivery terms -->
    <div
      class="mx-9 md:mx-18 lg:mx-36 my-12 md:my-24 rounded-tl-br-4xl border-8 border-greenka2 p-4 md:p-8 lg:p-16"
    >
      <h2
        class="text-center text-2xl md:text-4xl mb-5 md:mb-10 lg:mb-20 font-medium"
      >
        Delivery Terms
      </h2>
      <p
        class="text-base sm:text-xl md:text-2xl text-center mb-2 md:mb-4 lg:mb-8"
      >
        An Order is paid between 00.00 - 19.00 we will sent it D+1 “the next
        day”
      </p>
      <p
        class="text-base sm:text-xl md:text-2xl text-center mb-2 md:mb-4 lg:mb-8"
      >
        An Order is paid between 19.01 - 23.59 we will sent it D+2 “the day
        after”
      </p>
    </div>
  </div>
</template>
<style>
.bg-banner {
  background: url(../assets/banner.png) center/cover no-repeat fixed;
}
</style>
