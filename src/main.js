import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Button, Icon, Tabbar, TabbarItem, NavBar, Form, Field,Toast } from "vant";

Vue.use(Button);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
