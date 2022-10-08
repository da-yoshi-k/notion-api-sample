<template>
  <div>
    <div class="grid grid-cols-2">
      <div
        v-for="item in results"
        :key="item.id"
        :id="item.id"
        class="py-2 px-4 rounded-t-lg dark:border-gray-600"
      >
        <a
          href="#"
          class="
            block
            p-6
            bg-white
            rounded-lg
            border border-gray-200
            shadow-md
            hover:bg-gray-100
            dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
            mx-3
          "
        >
          <h5
            v-if="item.properties['名前'].title[0]"
            class="
              mb-2
              text-2xl
              font-bold
              tracking-tight
              text-gray-900
              dark:text-white
            "
          >
            {{ item.properties["名前"].title[0].text.content }}
          </h5>
          <p
            v-if="item.properties['説明'].rich_text[0]"
            class="font-normal text-gray-700 dark:text-gray-400"
          >
            {{ item.properties["説明"].rich_text[0].text.content }}
          </p>
        </a>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <!-- <button
        class="bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2 my-10"
        @click="addPage"
      >
        ページを追加する
      </button> -->
    </div>
  </div>
</template>

<script>
import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.DATABASE_ID;

export default {
  name: "IndexPage",
  async asyncData() {
    const myPage = await notion.databases.query({
      database_id: databaseId,
    });
    return myPage;
  },
  // methods: {
  //   addPage() {
  //     this.$axios.post(`${location.origin}/server-middleware-create`);
  //   },
  // },
};
</script>
