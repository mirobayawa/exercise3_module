import { createApp, h } from 'vue';
import initApollo from '@/plugins/vue-apollo';
import App from './app.vue';
import router from './router';
import userModule from './users';
import repositoriesModule from './repositories';
import './plugins/styles.css';

const app = createApp({
  setup() {
    initApollo();
  },
  render() {
    return h(App);
  },
});

userModule({ app, router });
repositoriesModule({ app, router });

app.use(router);
app.mount('#app');
