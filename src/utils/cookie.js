/* 
* @Author: vinceHuang
* @Date:   2016-03-10 10:41:07
* @Last Modified time: 2016-06-30 15:23:03
*/

import cookie from 'js-cookie'


export function setCookie(name,value,domain) {
  cookie.set(name, value, { domain: domain })
}


export function getCookie(name) {
  return cookie.get(name)
}

export function getJSON(name) {
  return cookie.getJSON(name)
}

export function removeCookie(name) {
  cookie.remove(name);
}

export function signOut() {
  cookie.remove('token');
}

export function isLogin() {
  return !!cookie.load('token')
}


export function setCookieFrom(from) {

  if(getCookie('from')==from){return false}
  let hostArr = window.location.hostname.split('.')
  let domain = hostArr[hostArr.length-2]+'.'+hostArr[hostArr.length-1]
  setCookie("from",from,domain)

}