<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table :data="table1.data" :columns="table1.columns">

          </paper-table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
  import {PaperTable} from "@/components";
  import json from "@/assets/jsons/todos.json"

  const tableColumns = ["Status", "Todo", "Date"];


  export default {
    components: {
      PaperTable
    },
    data() {
      return {
        table1: {
          title: "Todo List",
          subTitle: "this is a list of tasks and projects",
          columns: [...tableColumns],
          data: [...json.todos]
        }
      }
    }
  };

</script>
<style>
</style>
