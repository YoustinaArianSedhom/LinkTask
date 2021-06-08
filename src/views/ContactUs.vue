<template>
  <div class="w-full px-2">
    <div class="flex flex-wrap -mx-2">
      <div class="w-full xs:w-full bg sm:w-full px-2 mb-2">
        <div class="vx-row bg-white w-full">
          <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-2">
            <iframe
              class="w-full"
              height="400"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=nasr%20city%20egypt&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
          <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-2">
            <div class="vx-row ml-2 w-full mb-2">
              <span class="text-sm text-grey-light">
                <feather-icon
                  icon="MapPinIcon"
                  svgClasses="h-4 w-4"
                  class="ml-1 text-primary"
                />

                Attia Sawalhi Street, First Division,Nasr City, Cairo
                Governorate.
              </span>
            </div>
            <div class="vx-row ml-2 w-full mb-2">
              <span class="text-sm text-grey-light">
                <feather-icon
                  icon="MailIcon"
                  svgClasses="h-4 w-4"
                  class="ml-1 text-primary"
                />

                ibrahimelmalky00@gmail.com
              </span>
            </div>
            <div class="vx-row ml-2 w-full mb-2">
              <span class="text-sm text-grey-light">
                <feather-icon
                  icon="PhoneIcon"
                  svgClasses="h-4 w-4"
                  class="ml-1 text-primary"
                />

                +201120016461
              </span>
            </div>

            <div class="mt-5 md:ml-4 lg:ml-4 xl:ml-4">
              <label class="text-md">your name</label>
              <vs-input
                :name="$t('User Name')"
                v-validate="'required'"
                placeholder="Enter Full Name"
                v-model="Model.name"
                class="w-full mt-2"
              />
              <span class="text-danger text-md">{{
                errors.first($t("User Name"))
              }}</span>
            </div>
            <div class="mt-5 md:ml-4 lg:ml-4 xl:ml-4">
              <label class="text-md">Subject</label>
              <vs-input
                :name="$t('Subject')"
                v-validate="'required'"
                placeholder="Enter Subject"
                v-model="Model.subject"
                class="w-full mt-2"
              />
              <span class="text-danger text-md">{{
                errors.first($t("Subject"))
              }}</span>
            </div>
            <div class="mt-5 md:ml-4 lg:ml-4 xl:ml-4">
              <label class="text-md">your email</label>
              <vs-input
                v-validate="'required|email'"
                :name="$t('Email')"
                v-model="Model.email"
                placeholder="Enter Email"
                class="w-full "
              />
              <span class="text-danger text-md">{{
                errors.first($t("UserName"))
              }}</span>
            </div>
            <div class="mt-5 md:ml-4 lg:ml-4 xl:ml-4">
              <label class="text-md">your message</label>
              <vs-textarea
                v-model="Model.message"
                rows="4"
                class="w-full mt-2"
              />
              <span class="text-danger text-md">{{
                errors.first($t("NationalID"))
              }}</span>
            </div>
            <vs-button
              class="mb-4 rounded-full md:w-auto float-right m-2"
              :disabled="!validateForm"
              @click="ContactUS"
              color="primary"
              >Submit Message
            </vs-button>
          </div>
        </div>

        <div class="vx-row bg-white w-full">
          <div class="w-full p-2">
            <span class="text-primary text-3xl font-bold">
              WRO in your country? Find your National Organizer!
            </span>
          </div>
        </div>
        <div class="vx-row bg-white mb-4 w-full">
          <div class="w-full p-2">
            <span class="text-grey-light text-lg">
              WRO events are organized in many countries all over the world. Our
              National Organizers are responsible for the competition in a
              member country. Please take a look if WRO is offered in your
              country and contact your National Organizer in your country.
            </span>
          </div>
        </div>
        <div class="vx-row bg-white mt-8 w-full">
          <div class="w-full p-2">
            <vs-button
              class="mb-4 rounded-full md:w-auto float-left m-2"
              @click="$router.push({ name: 'MemberCountries' })"
              color="primary"
              >Member Countries
            </vs-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { Model: {} };
  },
  computed: {
    validateForm() {
      return (
        !this.errors.any() &&
        this.Model.email != "" &&
        this.Model.subject != "" &&
        this.Model.name != "" &&
        this.Model.message != null &&
        this.Model.message != ""
      );
    }
  },
  methods: {
    ContactUS() {
      if (!this.validateForm) {
        window.showFillData();
        return;
      }

      this.$vs.loading();

      this.$store
        .dispatch("auth/addcontactus", this.Model)
        .then(res => {
          debugger;
          if (res.status == 200) {
            debugger;
            this.$vs.loading.close();
            window.showSuccess();
          }
        })
        .catch(err => {
          this.$vs.loading.close();
          window.showError();
        });
    }
  }
};
</script>
