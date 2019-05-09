import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Todo from './views/Todo.vue';
import VideoIndex from './views/videos/index.vue';
import VideoShow from './views/videos/show.vue';
import ShoppingCart from './views/ShoppingCart.vue';
import ForumIndex from './views/forums/ForumIndex.vue';
import ForumNew from './views/forums/ForumNew.vue';
import ForumShowWrapper from './views/forums/ForumShowWrapper.vue';
import ForumShow from './views/forums/ForumShow.vue';
import ForumEdit from './views/forums/ForumEdit.vue';
import ProfileWrapper from './views/profile/ProfileWrapper.vue';
import ProfileShow from './views/profile/ProfileShow.vue';
import ProfileBio from './views/profile/ProfileBio.vue';
import ProfileEdit from './views/profile/ProfileEdit.vue';
import ProfileSettings from './views/profile/ProfileSettings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart,
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideoIndex,
    },
    {
      path: '/videos/:id',
      name: 'videoShow',
      component: VideoShow,
    },
    {
      path: '/forums',
      name: 'forumsIndex',
      component: ForumIndex,
    },
    {
      path: '/forums/new',
      name: 'forumsNew',
      component: ForumNew,
    },
    {
      path: '/forums/:id',
      component: ForumShowWrapper,
      children: [
        {
          path: '',
          name: 'forumShow',
          component: ForumShow,
        },
        {
          path: 'editPost',
          name: 'forumEdit',
          component: ForumEdit,
        },
      ],
    },
    {
      path: '/profile/:id',
      component: ProfileWrapper,
      children: [
        {
          path: '',
          name: 'profileShow',
          component: ProfileShow,
        },
        {
          path: 'bio',
          name: 'profileBio',
          component: ProfileBio,
        },
        {
          path: 'edit',
          name: 'profileEdit',
          component: ProfileEdit,
        },
        {
          path: 'settings',
          name: 'profileSettings',
          component: ProfileSettings,
        },
      ],
    },
  ],
});


// /forum index
// /forum/new new
// /forum/:id show
// /form/:id/edit edit

// index
// show
// new
// create
// edit
// update
// delete

// /profile wrapper
// /profile/:id show
// /profile/:id bio bio
// /profile/:id/edit edit
