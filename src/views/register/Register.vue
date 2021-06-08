<template>
  <div class="flex w-full bg-img vx-row no-gutter justify-center items-center">
    <div class="vx-col flex w-full bg-img vx-row items-center justify-center">
      <span class="text-xl text-primary text-center font-extrabold">
        {{ "Register" }}
      </span>
    </div>
    <div
      class="vx-col flex w-full bg-img vx-row items-center justify-center mt-2 mb-12"
    >
      <vs-divider
        class="mb-0 pt-1 bg-primary sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/5 w-1/2"
        border-style="solid"
        position="center"
        color="success"
      ></vs-divider>
    </div>
    <div class="vx-col w-full sm:m-0 m-4">
      <div slot="no-body" class="full-page-bg-color">
        <div class="vx-row no-gutter">
          <div class="vx-col w-full mx-auto self-center d-theme-dark-bg">
            <div class="px-8 pt-6 register-tabs-container">
              <div class="vx-card__title"></div>
              <RegisterJWT></RegisterJWT>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterJWT from "./RegisterJWT.vue";

export default {
  components: {
    RegisterJWT
  }
};
</script>

<style lang="scss">
.register-tabs-container {
  min-height: 577px;

  .con-tab {
    padding-bottom: 23px;
  }
}
</style>
