<template>
  <div class="row">
    <div class="col-12">
      <card :title="title" :subTitle="subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table :data="data" :columns="columns">

          </paper-table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
  import {PaperTable} from "@/components";
  import axios from 'axios'



  export default {
    name: 'TaskList',
    components: {
      PaperTable
    },
    data() {
      return {
          title: "Task List",
          subTitle: "this is a list of tasks and projects",
          columns: ["Status", "Task", "Date"],
          data: []

      }
    },
    methods: {
      getTodos() {
        const path = 'https://wusel.space/api/tasks';
        axios.get(path)
          .then((res) => {
            console.log(res)
            this.data =[...res.data.tasks];
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.error(error);
          });
      },
    },
    created() {
      this.getTodos();
    },
  };

</script>
<style>
</style>
