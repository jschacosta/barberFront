<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { required } from "vuelidate/lib/validators";
import { serviceMethods, serviceGetters } from "@/state/helpers";

/**
 * Invoice-list component
 */
export default {
  page: {
    title: "Servicios",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      services:[],
      title: "Servicios",
      showModal: false,
      taskList: {
        name: "",
        },
      items: [
        {
          text: "Invoices",
          href: "/",
        },
        {
          text: "Invoice List",
          active: true,
        },
      ],
      validations: {
        taskList: {
        name: {required},
        },
      },
      selected: "",
      selected2: "",
      submitted: false,
    };
  },
  computed:{
    ...serviceGetters,
  },
  async created (){
    let send = 'isActive=true&page=1&limit=54'
    await this.getAllServices(send)
    this.services=this.getServices
  },
  methods: {
    ...serviceMethods,
    handleSubmit() {
      console.log("enviando")
      this.submitted = true;
      this.createService(this.taskList)
      // stop here if form is invalid
      // this.$v.$touch();
      // if (this.$v.$invalid) {
      //   return;
      // } else {
      //  console.log("todo bien")
      // }
      // this.submitted = false;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row mb-4">
      <div class="col-xl-12 col-sm-12 d-flex justify-content-around">
        <b-button
          class="btn btn-success"
          style="width: 120px"
          @click="showModal = true"
        >
          Crear Servicio
        </b-button>
      </div>
    </div>
    <div class="row">

      

      <!-- Para Flujo -->

      <div  v-for="(item, index) in services" class="col-xl-4 col-sm-6" v-bind:key="index">
        <div class="card">
          <div class="card-body">
            <div class="row">

              <div class="text-center">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Id # {{item._id}}</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">{{item.name}}</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-pin me-1 text-muted"></i> Activo: {{item.isActive?"Si":"No"}}
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i>{{"Creado: "+ new Date(item.createdAt).getDate()+"-"+new Date(item.createdAt).getMonth()+"-"+new Date(item.createdAt).getYear()}}
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <div
                    class="
                      avatar-sm
                      me-3
                      mx-lg-auto
                      mb-3
                      mt-1
                      float-start float-lg-none
                    "
                  >
                    <span
                      class="
                        avatar-title
                        rounded-circle
                        bg-info bg-soft
                        text-primary
                        font-size-16
                      "
                    >
                      T
                    </span>
                  </div>
                  <h5 class="mb-1 font-size-15 text-truncate">Timothy Lee</h5>
                  <a href="#" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14256</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">
                    Landing page Design
                  </h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1189
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 13 Oct,
                        19
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-1.jpg"
                    class="
                      avatar-sm
                      me-3
                      mx-lg-auto
                      mb-3
                      mt-1
                      float-start float-lg-none
                      rounded-circle
                    "
                    alt="img"
                  />
                  <h5 class="mb-1 font-size-15 text-truncate">Stanley Bland</h5>
                  <a href="#" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14257</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">Landing page UI</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1148
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 14 Oct,
                        19
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="text-center my-3">
          <a href="javascript:void(0);" class="text-success"
            ><i class="bx bx-loader bx-spin font-size-18 align-middle me-2"></i>
            Load more
          </a>
        </div>
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <!-- Modal de creación -->
    <b-modal title="Crear servicio" v-model="showModal" hide-footer>
              <form @submit.prevent="handleSubmit">
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3">
                      <label for="name">Event Name</label>
                      <input
                        id="name"
                        v-model="taskList.name"
                        type="text"
                        class="form-control"
                        placeholder="Insert name"
                        :class="{
                          'is-invalid': submitted 
                        }"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      Task Type
                      <b-form-select
                        v-model="selected"
                        class="mb-3 form-select"
                      >
                        <b-form-select-option value="upcoming"
                          >Upcoming</b-form-select-option
                        >
                        <b-form-select-option value="inprogress"
                          >In-progress</b-form-select-option
                        >
                        <b-form-select-option value="completed"
                          >Completed</b-form-select-option
                        >
                      </b-form-select>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      Task Status
                      <b-form-select
                        v-model="selected2"
                        class="mb-3 form-select"
                      >
                        <b-form-select-option value="Approved"
                          >Approved</b-form-select-option
                        >
                        <b-form-select-option value="Waiting"
                          >Waiting</b-form-select-option
                        >
                        <b-form-select-option value="Pending"
                          >Pending</b-form-select-option
                        >
                        <b-form-select-option value="Complete"
                          >Complete</b-form-select-option
                        >
                      </b-form-select>
                    </div>
                  </div>
                </div>
                <div class="text-end mt-3">
                  <b-button variant="light">Close</b-button>
                  <b-button type="submit" variant="success" class="ms-1"
                    >Create event</b-button
                  >
                </div>
              </form>
    </b-modal>
  </Layout>
</template>