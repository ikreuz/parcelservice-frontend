<template>
  <v-app>
    <div class="c-target c-target-bg">
      <v-card max-width="400" class="auth-panel auth-panel--size">
        <v-container>
          <v-card class="noshadow">
            <figure class="disflex">
              <img width="80" src="../assets/img/logo.svg" alt="Parcel logo" />
            </figure>
          </v-card>
          <form
            lazy-validation
            id="auth-login-form-si"
            class="auth-login-form"
            @submit.prevent="postLogin"
          >
            <div class="auth-content auth-field">
              <v-flex class="disflex">
                <v-card class="noshadow w-full">
                  <v-col cols="12" class="auth-wrapper-input">
                    <div class="auth-input-data">
                      <v-text-field
                        id="auth-field"
                        class="auth-input"
                        solo
                        dense
                        required
                        type="text"
                      >
                      </v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" class="auth-wrapper-input">
                    <div class="auth-input-data">
                      <v-text-field
                        id="auth-another-field"
                        class="auth-input"
                        solo
                        dense
                        required
                        type="text"
                      >
                      </v-text-field>
                    </div>
                  </v-col>
                </v-card>
              </v-flex>
            </div>
            <div class="auth-wrapper">
              <v-btn
                color="anderson"
                type="submit"
                elevation="1"
                class="auth-btn"
              >
                <span class="">Continue</span>
              </v-btn>
            </div>
          </form>
          <div class="wrapper">
            <span class="recaptcha">
              This site is protected by reCAPTCHA and the Google
              <a
                href="https://policies.google.com/privacy?h1=en"
                target="_blank"
                class="auth-text"
                >Privacy Policy</a
              >
              and
              <a
                href="https://policies/google.com/terms?h1=en"
                target="_blank"
                class="auth-text"
                >Terms of Service</a
              >
              apply
            </span>
          </div>
        </v-container>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import { validationMixin } from "vuelidate";
// import { required, minLength, maxLength, numeric } from "vuelidate/validators";
import { isEmpty, isBlank } from "@/services/srv_utils.js";
import srvToasted from "@/services/srv_toasted.js";
// import srvAxios from "@/services/src_axios.js";
import ParcelUtils from "@/assets/js/parcel_utils.js";
import jsCrypto from "crypto-js";
import jsCookie from "js-cookie";
// import moment from "moment";

export default {
  mixins: [validationMixin],
  name: "Login",
  metaInfo: {
    title: "Login",
  },
  validations: {},
  middleware: "",
  props: {},
  components: {},
  data: () => ({
    parcelCls: new ParcelUtils(),
    error: null,
    toasted: {
      CUSTOM: "custom",
      DEFAULT: "default",
      INFO: "info",
      ERROR: "error",
      SUCCESS: "success",
      WARNING: "warning",
    },
    loader: null,
    loading: false,
    submitted: false,
    rules: {
      //   required: (value) => !!value || "Required.",
    },
    endPoints: {},
    customerProfile: {},
    profile: [],
  }),
  computed: {},
  watch: {},
  // Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.recaptcha();
    this.signOut();
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    async recaptcha() {
      try {
        /**  load the recaptcha */
        await this.$recaptchaLoaded();
        /** run recaptcha with the action login  */
        this.recaptchaToken = await this.$recaptcha("login");
        /** validate the token */
        // console.log(
        //   `parcel@: The recaptcha/Token is ${
        //     this.recaptchaToken ? "TRUE" : "FALSE"
        //   }`
        // );
      } catch (e) {
        this.error = e.message;
      }
    },
    signOut() {
      try {
        this.$store.dispatch("axnAuthenticated", false);
        this.$store.dispatch("axnAuth", null);
        jsCookie.remove("logged_in");
        jsCookie.remove("access_token");
        jsCookie.remove("vuex");
        localStorage.removeItem("logged_in");
        localStorage.removeItem("access_token");
        localStorage.removeItem("_grecaptcha");
        this.error = null;
      } catch (err) {
        this.error = err.message;
      }
    },
    async postLogin() {
      srvToasted("Test", this.toasted.CUSTOM, "mdi mdi-alert-box-outline");
      if (isEmpty(this.recaptchaToken) && isBlank(this.recaptchaToken)) {
        srvToasted("The token is null", this.toasted.ERROR, "mdi mdi-alert");
      }
      try {
        srvToasted("Authorized User", this.toasted.CUSTOM, "mdi mdi-check");
        const auth = { accessToken: "apiServiceWithAjax" };
        let ciphertext = jsCrypto.AES.encrypt(
          JSON.stringify(auth),
          "1234"
        ).toString();
        jsCookie.set("access_token", ciphertext); // saving token in cookie for server rendering
        localStorage.setItem("access_token", ciphertext);
        this.$store.dispatch("axnAutenticated", true);
        this.$store.dispatch("axnAuth", ciphertext);
        this.$router.push("/");
      } catch (err) {
        this.error = err.message;
      }
    },
  },

  // end Hooks
};
</script>

<style lang="scss">
</style>
