import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import {currency} from './currency'

Vue.filter('currency',currency)

// var a = [1,2,3,4]

// console.log([...a]);
// import {mapGetters} from 'vuex'
// var a = {
// 	...mapGetters({
// 		a: 'cartProducts',
// 		b: 'checkoutStatus'
// 	}),
// 	total(){
// 		console.log('yes');
// 	}
// };
// var b = [1,2,3,4]
// var c = [...b]
// console.log(a);

new Vue({
	el:'#app',
	store,
	render:h => h(App)
})