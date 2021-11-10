<template>
  <v-data-table
    :headers="headers"
    :items="portfolios"
    sort-by="area"
    class="elevation-1 mx-3 mt-2"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Events</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          persistent
          max-width="550px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              + Event
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline text-center fa-16">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.title"
                      label="Title"
                      class="fa-13"
                    ></v-text-field>
                    <span v-if="createError && createError.title"
                          class="fa-12 text-danger">{{createError.title[0]}}</span>
                  </v-col>
                  <!-- <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.architecture"
                      label="Architect"
                    ></v-text-field>
                    <span v-if="createError && createError.architecture" class="fa-12 text-danger">{{createError.architecture[0]}}</span>
                  </v-col> -->
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.location"
                      label="Location"
                      placeholder="eg: Kicukiro, Kagarama"
                    ></v-text-field>
                    <span v-if="createError && createError.location" class="fa-12 text-danger">{{createError.location[0]}}</span>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-textarea
                      clearable
                      counter
                      clear-icon="mdi-close-circle"
                      label="Description"
                      rows="1"
                      v-model="editedItem.description"
                    ></v-textarea>
                    <span v-if="createError && createError.description" class="fa-12 text-danger">{{createError.description[0]}}</span>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <div class="form-group col-lg-12">
                      <label>Browse Here</label>
                      <div class="d-flex">
                        <input type="file" accept="image/*" @change="saveImage($event)" class="cursor-pointer">
                      </div>
                    </div>

                    <div class="col-lg-12 mb-4" v-if="images && images.length>0">
                      <ul class="attached-photos p-30 bg-gray d-table list-unstyled">
                        <li class="attached-photo mt-sm-30" v-for="image in images" :key="image.id">
                          <img :src="image.image" alt="image"
                               style="height: 177px;min-width: 150px;">
                          <span style="cursor: pointer;"
                                @click="removeImage(image.id)"><i class="fa fa-times text-danger"></i></span>
                        </li>
                      </ul>
                    </div>
                  </v-col>
                  <!-- <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.area"
                      label="Area sqm"
                      type="number"
                      placeholder="eg: 100"
                    ></v-text-field>
                    <span v-if="createError && createError.area"
                          class="fa-12 text-danger">{{createError.area[0]}}</span>
                  </v-col> -->
                  <!-- <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.status"
                      label="Category"
                      placeholder="eg: completed"
                    ></v-text-field>
                    <span v-if="createError && createError.status"
                          class="fa-12 text-danger">{{createError.status[0]}}</span>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.client"
                      label="Client"
                    ></v-text-field>
                    <span v-if="createError && createError.client"
                          class="fa-12 text-danger">{{createError.client[0]}}</span>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.structure_engineer"
                      label="Structure Engineer"
                      placeholder="eg: John Doe"
                    ></v-text-field>
                    <span v-if="createError && createError.structure_engineer"
                          class="fa-12 text-danger">{{createError.structure_engineer[0]}}</span>
                  </v-col> -->
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.year_completed"
                      type="number"
                      label="Year"
                      aria-required="true"
                      required
                      placeholder="eg: 2015"
                    ></v-text-field>
                    <span v-if="createError && createError.year_completed"
                          class="fa-12 text-danger">{{createError.year_completed[0]}}</span>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-select
                      :items="services"
                      label="Service"
                      v-model="editedItem.service"
                    >
                    </v-select>
                    <span v-if="createError && createError.service" class="fa-12 text-danger mb-0">{{createError.service[0]}}</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions class="justify-content-around">
              <v-btn
                color="white darken-1"
                text
                class="text-white bg-danger"
                @click="close"
                :disabled="is_submitting"
                :class="{'pointer-events':uploading || saveDate}"
              >
                Cancel
              </v-btn>
              <v-btn
                color="white darken-1"
                text
                class="bg-primary"
                @click="save"
              >
                <span :class="{'fa fa-spin':uploading || saveDate}"
                :disabled="is_submitting">Save</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="600px">
          <v-card>
            <v-card-title class="headline text-center">Are you sure you want to delete this portfolio?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <!-- <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template> -->
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
  import axios from 'axios'
  import errorHandler from "@/helpers/errors.handler.js"

  export default {
    name: "index",
    layout: 'admin/adminPanel',
    middleware: 'auth',
    head() {
      return {
        title: "Admin ",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "Portfolios page for architecture studio",
          },
        ],
      };
    },
    data: () => ({
      image: null,
      saveDate: false,
      dialog: false,
      uploading: false,
      dialogDelete: false,
      services: [
        {
          id: '1',
          text: 'Interior Design',
          value: 'interior design'
        },
        {
          id: '13',
          text: 'Industrial',
          value: 'industrial '
        },
        {
          id: '2',
          text: 'Residential Architecture',
          value: 'residential architecture'
        },
        {
          id: '3',
          text: 'Refurbishment',
          value: 'refurbishment'
        },
        {
          id: '4',
          text: 'Cultural & Architecture',
          value: 'cultural & architecture'
        },
        {
          id: '5',
          text: 'Commercial & Offices',
          value: 'commercial & offices'
        },
        {
          id: '6',
          text: 'Hospitality Architecture',
          value: 'hospitality architecture'
        },
        {
          id: '7',
          text: 'Healthcare Architecture',
          value: 'healthcare architecture'
        },
        {
          id: '8',
          text: 'Education Architecture',
          value: 'educational architecture'
        },
        {
          id: '9',
          text: 'Sports Architecture',
          value: 'sport architecture'
        },
        {
          id: '10',
          text: 'Public Architecture',
          value: 'public architecture'
        },
        {
          id: '11',
          text: 'Industrial Architecture',
          value: 'industrial architecture'
        },
        {
          id: '12',
          text: 'landscape & urbanism',
          value: 'landscape urbanism'
        },
        {
          id: '13',
          text: 'under construction project',
          value: 'under construction project'
        },
        {
          id: '14',
          text: '3d model making',
          value: '3d model making'
        }
      ],
      image_name: "Please, select image to upload",
      images: [],
      is_submitting: false,
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: '',
          // value: 'title',
        },
        // {text: 'Architect', value: 'architecture'},
        {text: 'Location', value: ''},
        // {text: 'Location', value: 'location'},
        // {text: 'Area (msq)', value: 'area'},
        // {text: 'Category', value: 'status'},
        {text: 'Completed Yr', value: ''},
        // {text: 'Completed Yr', value: 'year_completed'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      portfolios: [],
      editedIndex: -1,
      createError: {},
      editedItem: {
        title: '',
        // architecture: '',
        location: '',
        // area: '',
        status: '',
        service: '',
        description: '',
        client: '',
        // structure_engineer: '',
        images_url: [],
        year_completed: '',
      },
      defaultItem: {
        title: '',
        architecture: '',
        location: '',
        area: '',
        images_url: [],
        status: '',
        description: '',
        client: '',
        structure_engineer: '',
        service: '',
        year_completed: ''
      },
    }),
    async asyncData({$axios, params, req, redirect}) {
      const config = {
        headers: {
          Accept: 'application/json'
        }
      }
      try {
        const res = await $axios.get('/portfolios', config)
        const portfolios = res.data.portfolios
        return {portfolios}
      } catch (e) {
        return {portfolios: []};
      }
    },
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'New Event' : 'Edit Item'
      },
    },

    watch: {
      dialog(val) {
        val || this.close()
      },
      dialogDelete(val) {
        val || this.closeDelete()
      },
    },

    created() {
      this.initialize();
    },

    methods: {
      saveImage(e) {
        const image = e.target.files[0];
        this.image_name = image.name;
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
          e.target.result;
          this.images.push({image: e.target.result, id: Date.now(), old: false, data: image})
        }
      },
      removeImage(imageID) {
        const index = this.images.findIndex(data => data.id === imageID);
        this.images.splice(index, 1)
      },
      initialize() {
        this.portfolios
      },
      editItem(item) {
        if (item.images_url.length > 0) {
          const imagesUrls = item.images_url.map(i => {
            return {
              id: i,
              image: i,
              old: true
            }
          })
          this.images = [...imagesUrls]
        }
        this.editedIndex = this.portfolios.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        this.editedIndex = this.portfolios.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      // deleteItemConfirm() {
      //   this.$axios.$delete(`/portfolios/portfolio/${this.editedItem.id}`)
      //     .then(() => {
      //       this.portfolios.splice(this.editedIndex, 1)
      //       this.closeDelete()
      //       this.$bvToast.toast('Portfolio Deleted Success', {
      //         title: `Deleting Portfolio`,
      //         variant: 'success',
      //         solid: true
      //       })
      //     })
      //     .catch(() => {
      //       this.$bvToast.toast('Portfolio Deleted Failed', {
      //         title: `Deleting Portfolio`,
      //         variant: 'danger',
      //         solid: true
      //       })
      //     })
      // },

      close() {
        this.dialog = false
        this.createError = {}
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
          this.images = []
        })
      },

      closeDelete() {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async save() {
        const portfolio = {}
        portfolio.architecture = this.editedItem.architecture
        portfolio.area = this.editedItem.area
        portfolio.location = this.editedItem.location
        portfolio.service = this.editedItem.service
        portfolio.status = this.editedItem.status
        portfolio.title = this.editedItem.title
        portfolio.client = this.editedItem.client
        portfolio.structure_engineer = this.editedItem.structure_engineer
        portfolio.description = this.editedItem.description
        portfolio.year_completed = this.editedItem.year_completed
        let uploadedImage = []
        const imagesLen = this.images.length
        let imageArray = this.images
        this.is_submitting = true
        if (imagesLen) {
          let i;
          for (i = 0; i < imagesLen; i++) {
            if (!imageArray[i].old) {
              this.uploading = true
              // var url = `https://api.cloudinary.com/v1_1/iwacu-heza/upload`;
              var fd = new FormData();
              fd.append("upload_preset", 'iwacu-heza-preset');
              fd.append("tags", "browser_upload");
              fd.append("file", imageArray[i].image);
              const configs = {
                headers: {"X-Requested-With": "XMLHttpRequest"},
              };
            //   await axios.post(url, fd, configs).then(data => {
            //     uploadedImage.push(`${data.data.secure_url}`)
            //     this.uploading = false
            //   }).catch(e => {
            //    this.is_submitting = false
            //     this.uploading = false
            //     alert("Please check your internet")
            //   })
            // } else {
              await uploadedImage.push(imageArray[i].image)
            }
          }
        } else {
          this.is_submitting = false
          alert("Please Upload at least one image")
        }
        if (this.editedIndex > -1) {
          if (!this.uploading) {
            const config = {
              headers: {
                Accept: 'application/json'
              }
            }
            this.$nuxt.$loading.start()
            this.saveData = true
            portfolio.images_url = uploadedImage
            // await this.$axios.$put(`/portfolios/portfolio/${this.editedItem.id}`, portfolio, config).then(data => {
            //   Object.assign(this.portfolios[this.editedIndex], this.editedItem)
            //   this.$axios.get('/portfolios', config)
            //   this.$nuxt.$loading.finish()
            //   this.saveData = false
            //  this.is_submitting = false
            //   this.close()
            //   this.$bvToast.toast('Portfolio Updated Successfully', {
            //     title: `Updating Portfolio`,
            //     variant: 'success',
            //     solid: true
            //   })
            // })
              .catch(({response: err}) => {
             this.is_submitting = false
                this.saveData = false
                const errors = err.data
                this.createError = errors && errors.errors
                this.$nuxt.$loading.finish()
              })
          }
        } else {
          if (!this.uploading) {
            const config = {
              headers: {"content-type": "application/json"}
            };
            this.$nuxt.$loading.start()
            this.saveData = true
            portfolio.images_url = uploadedImage
            // await this.$axios.$post(`/portfolios/create`, portfolio, config).then(data => {
            //   this.portfolios.push(this.editedItem)
            //   this.$axios.get('/portfolios', config)
            //   this.$nuxt.$loading.finish()
            //   this.saveData = false
            //  this.is_submitting = false
            //   this.close()
            //   this.$bvToast.toast('Portfolio Created Successfully', {
            //     title: `Creating Portfolio`,
            //     variant: 'success',
            //     solid: true
            //   })
            // })
              .catch(({response: err}) => {
                this.saveData = false
             this.is_submitting = false
                const errors = err.data
                this.createError = errors && errors.errors
                this.$nuxt.$loading.finish()
                this.$bvToast.toast('Portfolio Creating Failed', {
                  title: `Creating Portfolio`,
                  variant: 'danger',
                  solid: true
                })
              })
          }
        }
      },
    },
  }
</script>

<style scoped>

</style>
