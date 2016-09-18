import Vue from 'vue'
import VueResource from 'vue-resource'


Vue.use(VueResource)

// HTTP相关
// Vue.http.options.crossOrigin = true
// Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.emulateJSON = true;
Vue.http.options.headers={
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8;'
};

Vue.http.interceptors.push({
  request (request) {
    // 这里对请求体进行处理
    request.headers = request.headers || {}
    // if (getCookie('token')) {
    //   request.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
    // }
    return request
  },
  response (response) {
    // 这里可以对响应的结果进行处理
    // if (response.status === 401) {
    //   // signOut()
    //   window.location.pathname = '/staff'
    // }
    return response
  }
})




// export const StaffAuth = Vue.resource(API_ROOT + 'login{/method}')
// export const InfoAuth = Vue.resource(API_ROOT + 'info{/method}')
export const cnodeServices = Vue.resource('https://cnodejs.org/api/v1{/method}')
