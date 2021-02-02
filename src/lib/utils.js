
class Utils {
  constructor() {

  }
  hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
  }
  addClass(ele, cls) {
    if (!this.hasClass(ele, cls)) ele.className += ' ' + cls
  }
  removeClass(ele, cls) {
    if (this.hasClass(ele, cls)) {
      const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
      ele.className = ele.className.replace(reg, '')
    }
  }
  set(key, value) {
    localStorage.setItem(key, value)
  }

  get(key, isObj = false) {
    if(isObj) {
      return JSON.parse(localStorage.getItem(key))
    }else {
      return localStorage.getItem(key)
    }
  }
  showClass(cls) {
    cls ? document.getElementsByClassName(cls)[0].style.opacity = '1' : new Error('请输入类名')
  }
  hiddenClass(cls) {
    cls ? document.getElementsByClassName(cls)[0].style.opacity = '0' : new Error('请输入类名')
  }
  changeInnerText(cls, text) {
    document.getElementsByClassName(cls)[0].innerHTML = text
  }

  clickfu (to, cls) {
    //回调函数，to为点击对象
    to.setAttribute("class", cls);
    const siblings = to.parentNode.childNodes;
    for (let i = 0; i < siblings.length; i++)
      if (siblings[i].nodeType == 1 && siblings[i] != to) siblings[i].className = '';
  }

  formatSeconds(value) {
    if(!value) return '00:00'
    value = parseInt(value);
    let time;
    if (value > -1) {
      let hour = Math.floor(value / 3600);
      let min = Math.floor(value / 60) % 60;
      let sec = value % 60;
      let day = parseInt(hour / 24);
      if (day > 0) {
        hour = hour - 24 * day;
        time = day + "day " + hour + ":";
      } else if (hour > 0) {
        time = hour + ":";
      }else {
        time = "";
      }
      if (min < 10) {
        time += "0";
      }
      time += min + ":";
      if (sec < 10) {
        time += "0";
      }
      time += sec;
    }
    return time;
  }

  classEle(cls) {
    return  cls && document.getElementsByClassName(cls)[0]
  }

  deepClone(source) {
    if (source && typeof source !== 'object') {
      return JSON.parse(JSON.stringify(source))
    }
    const targetObj = source.constructor === Array ? [] : {}
    Object.keys(source).forEach(keys => {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    })
    return targetObj
  }

  isIPHONE() {
    return navigator.userAgent.toUpperCase().indexOf('IPHONE') !== -1;
  }

  /**
   * 解决IOS：input框输入完成，键盘关闭后位置上移问题
   */

  fitIos() {
    const u = navigator.userAgent;
    let flag;
    let myFunction;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if(isIOS){
      document.body.addEventListener('focusin', () => {  //软键盘弹起事件
        flag=true;
        clearTimeout(myFunction);
      })
      document.body.addEventListener('focusout', () => { //软键盘关闭事件
        flag=false;
        if(!flag){
          myFunction = setTimeout(function(){

            window.scrollTo({top:0,left:0,behavior:"smooth"})//重点  =======当键盘收起的时候让页面回到原始位置(这里的top可以根据你们个人的需求改变，并不一定要回到页面顶部)

          },200);
        }else{
          return
        }
      })
    }else{
      return
    }
  }


}

export default Utils
