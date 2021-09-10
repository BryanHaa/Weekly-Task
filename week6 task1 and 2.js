var check = new Vue({
  el: '#check',

  data() {
    return {
      checkedTime: []

    }
  }
})
Vue.component('prompt-compo', {
  template: '<div><p>${message}</p><button v-on:keyup.enter="Submit">Submit-time</button></div>',
  delimiters: ['${','}'],
  data: function(){
    return {
      message: 'Once Done, press Submit'
    }
  },
  methods: {
    Submit: function() {
      alert('Submitted successfully');
    }
  }
});

let vm = new Vue({
  el:'#app',
  template: `<prompt-compo/>`
});
