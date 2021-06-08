<template>
  <div class="w-full px-2">
    <div class="flex flex-wrap -mx-2">
      <div class="w-full xs:w-full bg sm:w-full px-2 mb-2">
        <div class="vx-row bg-white w-full">
          <!-- Image -->
          <div class="w-full mt-6 p-2">
            <ul class="vx-timeline">
              <li v-for="item in data" :key="item.title">
                <div class="vx-row flex-wrap mb-4 ">
                  <div class="sm:w-1/4 md:w-1/3 lg:w-1/5 xl:w-1/5 w-1/3 ">
                    <img
                      class="responsive ml-4 rounded-bl-3xl rounded-t-3xl h-24 w-3/4"
                      src="@/assets/images/flags/eg.png"
                      alt="banner"
                    />
                  </div>
                  <div class="sm:w-3/4 md:w-2/3 lg:w-4/5 xl:w-4/5 w-2/3 mt-4">
                    <h2
                      class="break-words text-primary mb-4 align-baseline activity-e-time"
                    >
                      {{ item.title }}
                    </h2>
                    <p class="break-words align-baseline font-semibold">
                      {{ item.body }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- Country Logo -->
          <div class="w-full mt-6 p-2">
            <ul class="vx-timeline">
              <li v-for="item in bodyData" :key="item.title">
                <div class="vx-row flex-wrap mb-4 ">
                  <div class="sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 w-full">
                    <img
                      class="responsive ml-4 w-4/5"
                      src="@/assets/images/empty-image.png"
                      alt="banner"
                    />
                  </div>
                  <div class="sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-2/3 w-full mt-4">
                    <h2
                      class="break-words text-4xl text-primary mb-4 align-baseline activity-e-time"
                    >
                      {{ item.title }}
                    </h2>
                    <p class="break-words text-xl align-baseline font-semibold">
                      {{ item.body }}
                    </p>
                    <p
                      class="break-words text-primary text-xl mt-2 align-baseline font-semibold"
                    >
                      Contact Person:
                    </p>
                    <p
                      class="break-words mb-2 mt-2 align-baseline font-semibold"
                    >
                      {{ item.user }}
                    </p>
                    <p class="break-words mb-2 align-baseline font-semibold">
                      {{ item.email }}
                    </p>
                    <vs-button class="w-full rounded-3xl h-12">
                      About Us
                    </vs-button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: "Egypt",
          body: " Let’s Network: Entrepreneurs in the Time of Covid-19"
        }
      ],
      bodyData: [
        {
          title: "BE-STEAM",
          body: " Let’s Network: Entrepreneurs in the Time of Covid-19",
          user: "Mr. Ibrahim Elmalky",
          email: " Ibrahim(at)Be-Steam.com"
        }
      ]
    };
  }
};
</script>
<style>
.vl {
  border-left: 6px solid #0093d2;
  height: 30px;
}
</style>
