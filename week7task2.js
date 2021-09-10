const UserName = {
  props: {
    firstName: String,
    lastName: String,
    email: String
  },
  template: `
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
      
    <input
    	type="text"
      :value="email"
      @input="$emit('update:email', $event.target.value)">
  `
};

const HelloVueApp = {
  components: {
    UserName,
  },
  data() {
    return {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
    };
  },
};

Vue.createApp(HelloVueApp).mount('#v-model-example')
