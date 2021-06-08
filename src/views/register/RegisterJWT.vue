<template>
  <div class="w-full px-2">
    <div class="flex flex-wrap -mx-2">
      <div class="w-full xs:w-full bg sm:w-full px-2 mb-2">
        <div class="vx-row bg-white w-full">
          <!-- Image -->
          <div
            class="w-full border-none sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-2"
            style="background-color: #f4f5f8 !important;"
            id="profile-pic-demo"
          >
            <VueFileAgent
              ref="vueFileAgent"
              class="profile-pic-upload-block h-48"
              :theme="'grid'"
              :multiple="false"
              :deletable="false"
              :meta="false"
              :accept="'image/*,.zip'"
              :maxSize="'10MB'"
              :maxFiles="1"
              :helpText="'Upload Image'"
              :errorText="{
                type: 'Invalid file type. Only images or zip Allowed',
                size: 'Files should not exceed 10MB in size'
              }"
              @select="filesSelected($event)"
              @beforedelete="onBeforeDelete($event)"
              @delete="fileDeleted($event)"
              v-model="Model.logo"
            ></VueFileAgent>
            <vs-button
              type="float"
              class="text-danger flex w-full bg-img vx-row no-gutter items-center justify-center"
              icon-pack="feather"
              icon="icon-x"
              icon-after
              v-if="Model.logo"
              @click="removePic()"
            >
            </vs-button>
          </div>
          <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-2">
            <!-- Country -->
            <div class="md:ml-4 lg:ml-4 xl:ml-4">
              <label class="text-md">{{ $t("Country") }}</label>
              <v-select
                class="w-full mt-2"
                style="padding-bottom: 0 !important"
                :dir="$vs.rtl ? 'rtl' : 'ltr'"
                :options="CountryList"
                label="name"
                :searchable="true"
                v-model="Model.country_id"
                :reduce="country_id => country_id.id"
              >
              </v-select>

              <!-- <span v-if="IsEmpty" class="text-danger text-md">{{
                this.CountryErrorMessage
              }}</span> -->
            </div>
            <!-- FullName -->
            <div class="mt-5 md:ml-4 lg:ml-4 xl:ml-4">
              <label class="text-md">{{ $t("Full Name") }}</label>
              <vs-input
                :name="$t('UserName')"
                icon-no-border
                v-validate="'required'"
                placeholder="Enter Full Name"
                v-model="Model.name"
                class="w-full mt-2"
              />
              <span class="text-danger text-md">{{
                errors.first($t("UserName"))
              }}</span>
            </div>
            <!-- Email -->
            <div class="mt-5 md:ml-4 lg:ml-4 xl:ml-4">
              <label class="text-md">{{ $t("Email") }}</label>
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
          </div>
        </div>

        <div class="vx-row bg-white w-full mt-2">
          <!-- company_name -->
          <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-2">
            <label class="text-md">{{ $t("Company Name") }}</label>

            <vs-input
              v-validate="'required'"
              :name="$t('Company Name')"
              placeholder="Company Name"
              v-model="Model.company_name"
              class="w-full mt-2"
            />
            <span class="text-danger text-md">{{
              errors.first($t("Company Name"))
            }}</span>
          </div>
          <!-- Re Password -->
          <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-2">
            <div class=" md:ml-4 lg:ml-4 xl:ml-4">
              <label class="text-md">{{ $t("Address") }}</label>

              <vs-input
                v-validate="'required'"
                :name="$t('Address')"
                placeholder="Address"
                v-model="Model.address"
                class="w-full mt-2"
              />
              <span class="text-danger text-md">{{
                errors.first($t("Address"))
              }}</span>
            </div>
          </div>
        </div>
        <div class="vx-row bg-white w-full mt-2">
          <!-- Password -->
          <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-2">
            <label class="text-md">{{ $t("Password") }}</label>

            <vs-input
              v-validate="'required|min:8|max:99'"
              :name="$t('Password')"
              type="password"
              ref="password"
              placeholder="Password"
              v-model="Model.password"
              class="w-full mt-2"
            />
            <span class="text-danger text-md">{{
              errors.first($t("Password"))
            }}</span>
          </div>
          <!-- Re Password -->
          <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-2">
            <div class=" md:ml-4 lg:ml-4 xl:ml-4">
              <label class="text-md">{{ $t("ConfirmPassword") }}</label>

              <vs-input
                v-validate="'min:8|max:100|confirmed:password'"
                :name="$t('ConfirmPassword')"
                type="password"
                placeholder="Confirm Password"
                v-model="ConfirmPassword"
                class="w-full mt-2"
              />
              <span class="text-danger text-md">{{
                errors.first($t("ConfirmPassword"))
              }}</span>
            </div>
          </div>
        </div>

        <div class="vx-row bg-white w-full">
          <!-- PhoneNumber -->
          <div class="w-full  p-2">
            <label class="text-md">{{ $t("PhoneNumber") }}</label>
            <vue-tel-input
              @change="onChange($event)"
              v-validate="'required'"
              v-bind="bindProps"
              :dir="$vs.rtl ? 'ltr' : 'ltr'"
              :name="$t('PhoneNumber')"
              class="LayoutCss mt-2 w-full"
              v-model="Model.phone"
            >
            </vue-tel-input>
            <span v-if="!isValid" class="text-danger text-md"
              >Phone Number Is Not Valid</span
            >
            <span class="text-danger text-md" v-if="ShowMobileError">{{
              MobileError
            }}</span>
            <span class="text-danger text-md">{{
              errors.first($t("PhoneNumber"))
            }}</span>
          </div>
        </div>

        <div class="vx-row bg-white w-full">
          <!-- Notes -->
          <div class="w-full p-2">
            <label class="text-md">{{ $t("Notes") }}</label>
            <vs-textarea
              v-model="Model.notes"
              rows="4"
              :name="$t('Notes')"
              v-validate="'required|min:4'"
              class="w-full mt-2"
            />
            <span class="text-danger text-md">{{
              errors.first($t("Notes"))
            }}</span>
          </div>
        </div>

        <div class="vx-row bg-white w-full">
          <!-- Terms-->
          <div class="w-full vx-row sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-2">
            <vs-checkbox v-model="AgreeTermsAndConditions">
              i agree to the
            </vs-checkbox>
            <span>
              <a href="https://google.com" class="text-primary" target="_blank">
                terms and conditions
              </a>
            </span>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex m-auto justify-center text-center">
        <vs-button
          class="mb-4 rounded-full md:w-auto float-right m-2"
          :disabled="!validateForm"
          @click="registerJWT"
          color="primary"
          >{{ $t("Register") }}
        </vs-button>

        <modal :clickToClose="false" name="example" :width="400" :height="400">
          <vs-row vs-w="12">
            <vs-col class="mt-8">
              <check />
            </vs-col>
            <vs-col class="mt-8">
              <span class="text-xl text-primary">
                Your Account Is Ready and waiting approve
              </span>
            </vs-col>
            <vs-col
              class="mt-5"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
            >
              <vs-button
                class="mb-4 rounded-full mx-auto md:w-auto float-right m-2"
                @click="GoToMail"
                color="primary"
                >Go To E-mail
              </vs-button>
            </vs-col>
          </vs-row>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import moduleGeneral from "@/store/General/moduleGeneral.js";
import axios from "@/axios.js";
import country_JSON from "@/views/JsonFiles/Country.json";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import check from "@/layouts/svg/check.vue";
export default {
  countryJson: country_JSON,

  data() {
    return {
      uploadUrl: "",
      uploadHeaders: { "X-Test-Header": "vue-file-agent" },
      fileRecordsForUpload: [], // maintain an upload queue
      AgreeTermsAndConditions: false,
      MobileError: null,
      ShowUserNameError: false,
      ShowMobileError: false,
      ConfirmPassword: "",
      CountryList: [],
      Model: {
        name: "",
        company_name: "",
        email: "",
        phone: "",
        notes: "",
        address: "",
        logo: null,
        country_id: "",
        password: ""
      },
      Img: {},
      userInfo: null,
      isValid: true,
      isValid1: true,
      srcs: [],
      bindProps: {
        mode: "international",
        defaultCountry: "",
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        placeholder: "",
        required: true,
        enabledCountryCode: true,
        enabledFlags: true,
        preferredCountries: ["EG", "US", "CZ", "LY", "GB"],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: "on",
        name: "telephone",
        maxLen: 20,
        wrapperClasses: "",
        inputClasses: "",
        dropdownOptions: {
          disabledDialCode: true
        },
        inputOptions: {
          showDialCode: false,
          tabindex: 0
        }
      }
    };
  },
  props: {},
  computed: {
    validateForm() {
      return (
        !this.errors.any() &&
        this.Model.name !== "" &&
        this.Model.company_name !== "" &&
        this.Model.password !== "" &&
        this.Model.email !== "" &&
        this.Model.phone !== "" &&
        this.Model.country_id !== null &&
        this.Model.address !== "" &&
        this.Model.notes !== "" &&
        this.Model.logo !== null &&
        this.AgreeTermsAndConditions == true
      );
    }
  },
  components: {
    vueDropzone: vue2Dropzone,
    check
  },
  methods: {
    GoToMail() {
      this.$modal.hide("example");
      var email = this.Model.email;
      var mailDomain = email.substring(
        email.lastIndexOf("@") + 1,
        email.lastIndexOf(".")
      );
      let url = `http://${mailDomain}.com`;
      window.open(url, "_blank");
    },
    removePic() {
      var profilePic = this.Model.logo;
      this.$refs.vueFileAgent.deleteUpload(this.uploadUrl, this.uploadHeaders, [
        profilePic
      ]);
      this.Model.logo = null;
    },
    uploadFiles: function() {
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.upload(
        this.uploadUrl,
        this.uploadHeaders,
        this.fileRecordsForUpload
      );
      this.fileRecordsForUpload = [];
    },
    deleteUploadedFile: function(fileRecord) {
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.deleteUpload(
        this.uploadUrl,
        this.uploadHeaders,
        fileRecord
      );
    },
    filesSelected: function(fileRecordsNewlySelected) {
      var validFileRecords = fileRecordsNewlySelected.filter(
        fileRecord => !fileRecord.error
      );
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
        validFileRecords
      );
    },
    onBeforeDelete: function(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        // queued file, not yet uploaded. Just remove from the arrays
        this.fileRecordsForUpload.splice(i, 1);
        var k = this.Model.logo.indexOf(fileRecord);
        if (k !== -1) this.Model.logo.splice(k, 1);
      } else {
        if (confirm("Are you sure you want to delete?")) {
          this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
        }
      }
    },
    fileDeleted: function(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      } else {
        this.deleteUploadedFile(fileRecord);
      }
    },

    getcountries() {
      this.$store.dispatch("general/getcountries").then(response => {
        if (response.status == 200) {
          debugger;
          this.CountryList = response.data.data;
        }
      });
    },

    registerJWT() {
      if (!this.validateForm) {
        return;
      }
      this.$vs.loading();
      this.Model.phone = this.Model.phone.replace(/\s/g, "");
      debugger;
      this.$store
        .dispatch("auth/registerUserJWT", {
          params: {
            Model: this.Model,
            logo: this.Model.logo
          }
        })
        .then(response => {
          if (response.status == 200) {
            debugger;
            this.$modal.show("example");

            this.$vs.loading.close();
            window.showSuccess();
          }
        })
        .catch(err => {
          debugger;
          this.$vs.loading.close();
          window.showError();
        });
    }
  },
  created() {
    this.getcountries();
  }
};
</script>
<style>
.vue-file-agent .file-preview-new {
  padding: 0px;
  /* height: 225px; */
  background-color: transparent !important;
}

#profile-pic-demo .drop-help-text {
  display: none !important;
}
.vue-file-agent .file-preview-new:before {
  background-color: #f4f5f8 !important;
}
#profile-pic-demo .is-drag-over .drop-help-text {
  display: block !important;
}
#profile-pic-demo .profile-pic-upload-block {
  border: 20px dashed transparent !important;
  padding: 20px !important;
  padding-top: 0 !important;
}
.vue-file-agent,
.vue-file-agent * {
  background-color: #f4f5f8 !important;
  border-style: none;
  width: 100%;
}
#profile-pic-demo .is-drag-over.profile-pic-upload-block {
  border-color: white !important;
}
#profile-pic-demo .vue-file-agent {
  float: left !important;
  top: 10px;
  margin: 0 15px 5px 0 !important;
  border: 0 !important;
  box-shadow: none !important;
}
</style>
