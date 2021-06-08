<template>
  <div class="w-full px-2">
    <div class="flex flex-wrap -mx-2">
      <div class="w-full xs:w-full bg sm:w-full px-2 mb-2">
        <div class="vx-row bg-white w-full">
          <div class="w-full p-2">
            <span class="text-primary text-2xl font-bold">
              WRO Categories
            </span>
          </div>
        </div>
        <div class="vx-row bg-white w-full">
          <div class="w-full p-2">
            <span class="text-grey-light text-xl">
              Overview
            </span>
          </div>
        </div>
        <div class="vx-row bg-white w-full">
          <div class="w-full p-2">
            <span class="text-grey-light text-lg">
              At WRO we offer challenging competitions for everyone in the age
              from 6 up to 25. We have four competition categories, with their
              own characteristics and challenges:
            </span>
          </div>
        </div>
        <div class="vx-row bg-white w-full">
          <div class="w-full p-2">
            <span class="text-grey-light text-lg">
              <ul style="list-style:disc">
                <li>Regular Category.</li>
                <li>
                  Open Category.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>

      <div class="vx-row bg-white w-full mt-2">
        <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 ">
          <div
            class="vx-col bg-primary rounded-bl-5xl rounded-tl-5xl	rounded-tr-5xl	
 w-full h-78"
            type="filled"
          >
            <div class="vx-row items-center justify-center ">
              <span class="text-3xl mt-8 mb-2 text-white">
                Regular Category
              </span>
            </div>
            <div class="vx-row mt-8 items-center justify-center ">
              <RegularCategory />
            </div>
            <div class="vx-row items-center justify-center ">
              <span
                class="text-md mt-4 mb-2 text-white cursor-pointer"
                @click="$router.push('/regularCompetition').catch(() => {})"
              >
                view more
              </span>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 ">
          <div
            class="vx-col bg-success rounded-br-5xl rounded-tr-5xl	rounded-tl-5xl	
 w-full h-78"
            type="filled"
          >
            <div class="vx-row items-center justify-center ">
              <span class="text-3xl mt-8 mb-2 text-white">
                Open Category
              </span>
            </div>
            <div class="vx-row mt-8 items-center justify-center ">
              <OpenCategory />
            </div>
            <div class="vx-row items-center justify-center ">
              <span
                class="text-md mt-4 mb-2 text-white cursor-pointer"
                @click="$router.push('/regularCompetition').catch(() => {})"
              >
                view more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OpenCategory from "@/layouts/svg/OpenCategory.vue";
import RegularCategory from "@/layouts/svg/RegularCategory.vue";

export default {
  components: {
    RegularCategory,
    OpenCategory
  }
};
</script>
