/*
* @Author: vinceHuang
* @Date:   2016-09-01 17:07:46
* @Last Modified by:   vinceHuang
* @Last Modified time: 2016-09-20 15:15:22
*/

import { setCookieFrom,getCookie } from './utils/cookie.js'

export default function(router) {
  router.map({
    '/': {
      name: 'home',
      component: function (resolve) {
        require(['./views/Home/index.vue'], resolve)
      }
    },
    // '/card/:cid': {
    //   name: 'card-detail',
    //   component: function (resolve) {
    //     require(['./views/Card/detail.vue'], resolve)
    //   }
    // },
    '/card': {
      component: function (resolve) {
        require(['./views/Card/index.vue'], resolve)
      },
      subRoutes: {
        '/': {
          name: 'card-index',
          component: function (resolve) {
            require(['./views/Card/list.vue'], resolve)
          }
        },
        '/add': {
          name: 'card-add',
          component: function (resolve) {
            require(['./views/Card/add.vue'], resolve)
          }
        },
        '/:cid': {
          name: 'card-detail',
          component: function (resolve) {
            require(['./views/Card/detail.vue'], resolve)
          }
        }
      }
    },
    '/manage': {
      name: 'manage',
      component: function (resolve) {
        require(['./views/Manage/index.vue'], resolve)
      },
      subRoutes: {
        '/': {
          component: function (resolve) {
            require(['./views/Manage/login.vue'], resolve)
          }
        },
        '/setpwdb': {
          name: 'setpwdb',
          component: function (resolve) {
            require(['./views/Manage/setpwdb.vue'], resolve)
          }
        }
      }
    },
    '*': {
      component: function (resolve) {
            require(['./views/NotFound.vue'], resolve)
          }
    }
  })


  router.beforeEach(function ({ to, next }) {
  		if (to.auth) {
	        if (localStorage.userId) {
	            next();
	        } else {
	            var redirect = encodeURIComponent(to.path);
	            redirect('/login?redirect=' + redirect);
	        }
	    } else {
	        next();
	    }
    })

  router.afterEach(function (transition) {
    console.log('成功浏览到: ' + transition.to.path)
  })

}

