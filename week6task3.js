Vue.createApp({
  data() {
    return {
      selected: 'Westfield Doncaster',
      options: [
        { text: 'Westfield Doncaster', value: 'Westfield Doncaster-619 Doncaster Rd' },
        { text: 'Burwood one', value: 'Burwood one-172-210 Burwood Hwy' },
        { text: 'Box hill Central', value: 'Box hill central-1 main st' }
      ]
    }
  }
}).mount('#v-model-select-dynamic')
