import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const DomainKey = 'Sass-Domain'
//base_url 
//http://192.168.8.91:88
//http://admin.charge.xinlai8.com/charging
export let base_url = "http://admin.charge.xinlai8.com/charging";
/*token*/
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    //	console.log(token)
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

/*domain*/
export function getDomain() {
    return Cookies.get(DomainKey)
}

export function setDomain(domain) {
    //	console.log(domain)
    return Cookies.set(DomainKey, domain)
}

export function removeDomain(domain) {
    return Cookies.remove(DomainKey)
}