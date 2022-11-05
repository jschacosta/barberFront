<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { required } from "vuelidate/lib/validators";
import { serviceMethods } from "@/state/helpers";

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
  created(){},
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
                        bg-primary bg-soft
                        text-primary
                        font-size-16
                      "
                    >
                      M
                    </span>
                  </div>
                  <h5 class="mb-1 font-size-15 text-truncate">Marion Burton</h5>
                  <a href="#" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14251</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">Skote Dashboard UI</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $1455
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 10 Oct,
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
                    src="@/assets/images/users/avatar-2.jpg"
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
                  <h5 class="mb-1 font-size-15 text-truncate">Francis Witte</h5>
                  <a href="#" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14252</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">Brand logo design</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1024
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 11 Oct,
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
                    src="@/assets/images/users/avatar-7.jpg"
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
                  <h5 class="mb-1 font-size-15 text-truncate">Joseph Flint</h5>
                  <a href="#" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14253</router-link
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
                        <i class="bx bx-calendar me-1 text-muted"></i> 12 Oct,
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
                    src="@/assets/images/users/avatar-8.jpg"
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
                  <h5 class="mb-1 font-size-15 text-truncate">Larry Nielsen</h5>
                  <a href="#" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14254</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">
                    Redesign - Landing page
                  </h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1245
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 12 Oct,
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
                    src="@/assets/images/users/avatar-5.jpg"
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
                  <h5 class="mb-1 font-size-15 text-truncate">Mark Evans</h5>
                  <a href="#" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14255</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">
                    Blog Template Design
                  </h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1024
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 11 Oct,
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
                        bg-success bg-soft
                        text-success
                        font-size-16
                      "
                    >
                      T
                    </span>
                  </div>
                  <h5 class="mb-1 font-size-15 text-truncate">Tommy Wilson</h5>
                  <a href="#" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14258</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">
                    Redesign - Dashboard
                  </h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1259
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 15 Oct,
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
                    src="@/assets/images/users/avatar-4.jpg"
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
                  <h5 class="mb-1 font-size-15 text-truncate">Louis Brandon</h5>
                  <a href="#" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14259</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">Email Template UI</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1355
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 15 Oct,
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
    <b-modal title="Add Task" v-model="showModal" hide-footer>
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