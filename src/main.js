import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  Button,
  Icon,
  Tabbar,
  TabbarItem,
  NavBar,
  Form,
  Field,
  Toast,
  Cell,
  List,
  Grid,
  GridItem,
  CellGroup,
} from "vant";

Vue.use(Button);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Cell);
Vue.use(List);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(CellGroup);

import ArticleItem from "./components/ArticleItem";
Vue.component("ArticleItem", ArticleItem);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
