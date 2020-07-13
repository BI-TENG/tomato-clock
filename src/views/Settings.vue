<template>
  <div id="settings" class="w-100">
    <div class="h1 d-flex justify-content-center my-3">Setting</div>
    <b-table striped :items="items" :fields="fields" @row-clicked="selectAlarm">
      <!-- 鬧鐘 -->
      <template v-slot:cell(preview)="data">
        <audio controls :src="'./alarms/'+data.item.file" ></audio>
      </template>
      <!-- 勾選 -->
      <template v-slot:cell(select)="data">
        <font-awesome-icon v-if="data.item.file == alarm" :icon="['fas','check']"></font-awesome-icon>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: '鬧鈴1',
          file: 'alarm1.mp3'
        },
        {
          name: '鬧鈴2',
          file: 'alarm2.mp3'
        },
        {
          name: '鬧鈴3',
          file: 'alarm3.mp3'
        },
        {
          name: '鬧鈴4',
          file: 'alarm4.mp3'
        }
      ],
      fields: [
        {
          key: 'name',
          label: '名稱'
        },
        {
          key: 'preview',
          label: '預覽'
        },
        {
          key: 'select',
          label: '選擇'
        }
      ]
    }
  },
  computed: {
    alarm () {
      return this.$store.getters.alarm
    }
  },
  methods: {
    selectAlarm (item) {
      this.$store.commit('selectAlarm', item.file)
    }
  }
}
</script>
