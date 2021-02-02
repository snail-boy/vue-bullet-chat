<template>
  <div class="vue-bullet-chat-wrapper" :style="background" @click="bulletChatClick">
    <div class="vbc-top">
      <div class="vbc-lock-wrapper">
        <svg t="1612009086242" class="vbc-icon-svg vbc-icon-open vbc-show-active" viewBox="0 0 1223 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11149" width="128" height="128"><path d="M874.207389 0.2134C694.712336 6.861365 556.767063 159.764558 556.767063 337.59762v119.663369h-498.59737C26.59186 458.92298 0 483.852849 0 515.430682v452.061616c0 31.577833 26.59186 56.507702 56.507702 56.507702h731.276143c31.577833 0 56.507702-26.59186 56.507702-56.507702V515.430682c0-31.577833-26.59186-56.507702-56.507702-56.507702H698.036318v-127.973325C698.036318 221.258234 792.769819 133.172698 904.123231 143.144646c98.057483 9.971947 169.523106 94.7335 169.523106 192.790983v187.805009c0 16.619912 13.29593 29.915842 29.915843 29.915843h81.43757c16.619912 0 29.915842-13.29593 29.915842-29.915843V329.287664C1216.577584 143.144646 1062.012399-6.434565 874.207389 0.2134z" p-id="11150"></path></svg>
        <svg t="1612009127525" class="vbc-icon-svg vbc-icon-close" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12557" width="128" height="128"><path d="M842.224081 429.259288h-72.934698V258.894547C769.289383 116.096916 653.9801 0 511.9701 0 370.038864 0 254.572054 116.096916 254.572054 258.815783v170.522268H181.71612A63.798169 63.798169 0 0 0 118.15424 493.214983v466.671795c0 35.443427 28.433505 64.034459 63.56188 64.034459h660.586724a63.719406 63.719406 0 0 0 63.483117-64.034459V493.214983a63.798169 63.798169 0 0 0-63.56188-63.876932z m-294.574264 309.539266v101.840781a8.427659 8.427659 0 0 1-8.270133 8.42766h-54.661641a8.427659 8.427659 0 0 1-8.42766-8.42766V738.798554A79.393277 79.393277 0 0 1 511.9701 588.439658a79.393277 79.393277 0 0 1 35.75848 150.280133z m122.870549-309.539266H353.498598V263.068995c0-87.8997 71.201908-159.574187 158.629029-159.574187 87.427121 0 158.550265 71.674487 158.550265 159.574187v166.190293z" p-id="12558"></path></svg>
      </div>

    </div>
    <div class="vbc-text-wrapper vbc-flex-sb-column">
      <div class="vbc-text" id="vbcTextInput" :style="textStyle">
        <span :class="textClass">{{value}}</span>
      </div>
    </div>
    <div class="vbc-input-wrapper vbc-flex-sb vbc-input-wrapper-active" @click.stop>
      <div class="vbc-flex-sb">
        <input class="input-box" ref="inputBox" v-model="setValue" placeholder="请输入弹幕文字" @focus="handleFocus" @keypress.enter="handleInput" />
        <div class="vbc-close-box">
          <svg t="1612167727491" class="vbc-close-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1694" width="128" height="128"><path d="M512 64a448 448 0 1 1 0 896A448 448 0 0 1 512 64zM408.576 363.136a32 32 0 1 0-45.312 45.248l103.808 103.744-103.808 103.744a32 32 0 1 0 45.312 45.248l103.744-103.68 103.744 103.68a32 32 0 1 0 45.248-45.248l-103.744-103.68 103.744-103.808a32 32 0 0 0-45.248-45.248L512.32 466.88z" fill="#B8B8B8" p-id="1695"></path></svg>
        </div>
      </div>
      <div class="svg-box" @click="handlePopup">
        <svg t="1611985197202" class="vbc-icon-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="5543" width="128" height="128">
          <path d="M661.3 250.7H138.7c-41.2 0-74.7 33.4-74.7 74.7v560c0 41.2 33.4 74.7 74.7 74.7h522.7c41.2 0 74.7-33.4 74.7-74.7v-560c-0.1-41.3-33.5-74.7-74.8-74.7z m18.7 616c0 20.6-16.7 37.3-37.3 37.3H157.3c-20.6 0-37.3-16.7-37.3-37.3V344c0-20.6 16.7-37.3 37.3-37.3h485.3c20.6 0 37.3 16.7 37.3 37.3v522.7z"
                p-id="5544" fill="#ffffff"></path>
          <path d="M596 624h-37.3c-15.4 0-28 12.6-28 28s12.6 28 28 28H596c15.4 0 28-12.6 28-28s-12.6-28-28-28z m0-93.3h-93.3c-15.4 0-28 12.6-28 28s12.6 28 28 28H596c15.4 0 28-12.6 28-28s-12.6-28-28-28z m0-93.4H465.3c-15.4 0-28 12.6-28 28s12.6 28 28 28H596c15.4 0 28-12.6 28-28s-12.6-28-28-28z m-297 0l-123 336h77.7l24.7-77h122.1l25.2 77h78.1l-120.6-336H299zM294 641l44.3-145.8h2L383.6 641H294z"
                p-id="5545" fill="#ffffff"></path>
          <path d="M885.3 64H418.7c-41.1 0-74.7 33.6-74.7 74.7v46.7c0 15.5 12.5 28 28 28s28-12.5 28-28v-28c0-20.5 16.8-37.3 37.3-37.3h429.3c20.5 0 37.3 16.8 37.3 37.3V680c0 20.5-16.8 37.3-37.3 37.3h-65.3c-15.5 0-28 12.5-28 28s12.5 28 28 28h84c41.1 0 74.7-33.6 74.7-74.7v-560c0-41-33.6-74.6-74.7-74.6z"
                p-id="5546" fill="#ffffff"></path>
        </svg>
      </div>
    </div>
    <vue-bullet-chat-popup
            :vbc-popup-vis-able.sync="vbcPopupVisAble"
            :animation="animation"
            @effect="getEffect"
            @color="getColor"
            @speed="getSpeed"
            @fontSize="getFontSize"
    />
  </div>
</template>

<script>
  import VueBulletChatPopup from "./vue-bullet-chat-popup";
  export default {
    name: "vue-bullet-chat",
    components: {VueBulletChatPopup},
    props: {
      background: {
        type: Object,
        default: function () {
          return {
            backgroundColor: 'black'
          }
        }
      },
      textObj: {
        type: Object,
        default: function () {
          return {
            transform: 'rotate(90deg)',
            letterSpacing: '8px'
          }
        }
      }
    },
    data() {
      return {
        el: '',
        textWrapper: '',
        innerHeight: '', // 屏幕高度
        i: 0,
        timer: null,
        initBottom: '',
        initValue: '', // 初始距离底部的值
        initBottomCopy: '',
        value: '请输入文字显示文字弹幕', // 设置值
        clickFlag: false,
        inputWrapper: false,
        isLock: false,
        setValue: '',
        lockClose: '',
        lockOpen: '',
        lockWrapper: '',
        closeTimer: null,
        initTransform: '',
        reqAnFrame: '',
        inputBox: '',
        closeIcon: '',
        vbcPopupVisAble: false,
        animation: '',
        color: 'white',
        fontSize: '48px',
        textClass: '',
        speed: 2,
        requestAnimationFrame: '',
        cancelAnimationFrame: ''
      }
    },
    watch: {
      setValue() {
        if(!this.setValue) {
          this.utils.removeClass(this.closeIcon, 'vbc-close-active')
        }else {
          this.utils.addClass(this.closeIcon, 'vbc-close-active')
        }
      }
    },
    computed: {
      textStyle() {
        return {
          ...this.textObj,
          color: this.color,
          fontSize: this.fontSize
        }
      }
    },
    mounted() {

      this.utils.fitIos()
      this.getEle()
      this.getText()
    },

    beforeDestroy() {
      window.cancelAnimationFrame(this.reqAnFrame)
    },

    methods: {
      getEle() {
        this.el = this.utils.classEle('vue-bullet-chat-wrapper')
        this.inputWrapper = this.el.getElementsByClassName('vbc-input-wrapper')[0]
        this.textWrapper = this.el.getElementsByClassName('vbc-text')[0]
        this.lockWrapper = this.el.getElementsByClassName('vbc-lock-wrapper')[0]
        this.lockClose = this.utils.classEle('vbc-icon-close')
        this.lockOpen = this.utils.classEle('vbc-icon-open')
        this.inputBox = this.utils.classEle('input-box')
        this.initTransform = this.utils.deepClone(this.textWrapper.style.transform)

        this.closeIcon = this.utils.classEle('vbc-close-box')

        // 设置锁
        this.lockWrapper.onclick = () => {
          if (!this.isLock) {
            this.isLock = true
            this.utils.hiddenClass('vbc-icon-open')
            this.utils.showClass('vbc-icon-close')
            this.utils.removeClass(this.inputWrapper, 'vbc-input-wrapper-active')
            this.utils.addClass(this.lockWrapper, 'lock-wrapper-active')

          }else {
            this.isLock = false
            this.utils.hiddenClass('vbc-icon-close')
            this.utils.showClass('vbc-icon-open')
          }
        }
        this.init()
        this.closeFun()
      },

      init() {
        this.initBottom = Math.round(window.innerHeight / 2 + this.textWrapper.getBoundingClientRect().height / 2)
        this.initBottomCopy = this.utils.deepClone(this.initBottom)
        this.textWrapper.style.transform = 'translateY('+ this.initBottom + 'px)' + this.initTransform // 初始化文字位置
        this.move()
      },

      move() {
        this.initBottom -= this.speed
        this.textWrapper.style.transform = 'translateY('+ this.initBottom + 'px)' + this.initTransform // 初始化文字位置
        if ( this.initBottom <= -this.initBottomCopy ) {
          this.initBottom = this.initBottomCopy
          this.i = 0
        }
        this.reqAnFrame = window.requestAnimationFrame(this.move)
      },

      handleInput() {
        window.cancelAnimationFrame(this.reqAnFrame)
        if(this.setValue) {
          this.value = this.setValue
        }else {
          this.value = '请输入文字显示文字弹幕'
          this.utils.removeClass(this.closeIcon, 'vbc-close-active')
        }

        this.$refs.inputBox.blur()
        this.bulletChatClick()
        setTimeout(() => {
          this.init()
        }, 20)
      },

      bulletChatClick() {
        if(!this.isLock) {
          if (!this.clickFlag) {
            this.utils.removeClass(this.closeIcon, 'vbc-close-active')
            this.utils.removeClass(this.inputWrapper, 'vbc-input-wrapper-active')
            this.utils.addClass(this.lockWrapper, 'lock-wrapper-active')
            this.clickFlag = true
          }else {
            this.utils.addClass(this.inputWrapper, 'vbc-input-wrapper-active')
            this.utils.removeClass(this.lockWrapper, 'lock-wrapper-active')
            this.clickFlag = false
          }
        }else {
          if (!this.clickFlag) {
            this.clickFlag = true
            this.utils.addClass(this.lockWrapper, 'lock-wrapper-active')
            this.utils.hiddenClass('vbc-icon-open')
          }else {
            this.clickFlag = false
            this.utils.removeClass(this.lockWrapper, 'lock-wrapper-active')
            this.utils.showClass('vbc-icon-close')
          }
        }
        this.closeFun()
      },
      closeFun() {
        if(!this.clickFlag) {
          clearTimeout(this.closeTimer)
          this.closeTimer = setTimeout(() => {
            this.utils.removeClass(this.inputWrapper, 'vbc-input-wrapper-active')
            this.utils.addClass(this.lockWrapper, 'lock-wrapper-active')
            this.clickFlag = true
          }, 3000)
        }
      },
      handleFocus() {
        this.utils.addClass(this.closeIcon, 'vbc-close-active')
        clearTimeout(this.closeTimer)
        // this.clickFlag = true
        this.utils.addClass(this.inputWrapper, 'vbc-input-wrapper-active')
        this.utils.removeClass(this.lockWrapper, 'lock-wrapper-active')
      },

      handlePopup() {
        this.vbcPopupVisAble = true
      },

      getColor(v) {
        this.color = v
      },

      getEffect(v) {
        this.textClass = v
      },

      getFontSize(v) {
        this.fontSize = v
        window.cancelAnimationFrame(this.reqAnFrame)
        setTimeout(() => {
          this.init()
        }, 20)
      },

      getText() {
        this.color = this.utils.get('vbcColor') || this.color
        this.textClass = this.utils.get('vbcEffect') || this.fontSize
        this.speed = +this.utils.get('vbcSpeed') || +this.speed
        this.fontSize = this.utils.get('vbcFontSize') || this.fontSize
      },

      getSpeed(v) {
        this.speed = +v
        if(v === '0') {
          window.cancelAnimationFrame(this.reqAnFrame)
          this.reqAnFrame = null
        }else {
          window.cancelAnimationFrame(this.reqAnFrame)
          setTimeout(() => {
            this.init()
          }, 20)
        }
      }
    }
  }
</script>
<style scoped>
  input::placeholder {
    font-size: 24px;
    line-height: 100px;
    vertical-align: baseline;
  }
</style>

<style scoped>
  .vue-bullet-chat-wrapper {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    user-select: none;
  }

  .vue-bullet-chat-wrapper .vbc-text {
    white-space: nowrap;
    letter-spacing: 8px;
  }
  .vue-bullet-chat-wrapper .vbc-input-wrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    padding-bottom: 20px;
    transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translate(0, 120px);
  }
  .vue-bullet-chat-wrapper .vbc-input-wrapper-active {
    transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translate(0, 0px);
  }

  .vue-bullet-chat-wrapper .svg-box {
    position: relative;
    width: 80px;
    height: 80px;
    background: #222;
    border-radius: 14px;
  }

  .vue-bullet-chat-wrapper .vbc-icon-svg {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 50px;
    height: 50px;
  }

  .vue-bullet-chat-wrapper .input-box {
    width: 570px;
    display: block;
    height: 80px;
    background: #222;
    border: none;
    outline: none;
    border-radius: 6px;
    text-indent: 1em;
    color: white;
    font-size: 30px;
  }

  /*顶部*/
  .vue-bullet-chat-wrapper .vbc-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    fill: white;
    z-index: 10;
  }
  .vue-bullet-chat-wrapper .vbc-top .vbc-icon-svg {
    opacity: 0
  }
  .vue-bullet-chat-wrapper .vbc-top .vbc-icon-svg.vbc-show-active {
    opacity: 1;
  }

  .vbc-text-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .vbc-lock-wrapper {
    height: 40px;
    transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translate(0, 0px);
  }
  .vbc-lock-wrapper.lock-wrapper-active {
    transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translate(0, -80px);
  }
  .vbc-close-box {
    position: relative;
  }
  .vbc-close-box .vbc-close-icon {
    position: absolute;
    top: -10px;
    right: 10px;
    width: 30px;
    height: 30px;
    opacity: 0;
    transition: all .3s;
  }
  .vbc-close-box.vbc-close-active .vbc-close-icon {
    opacity: 1;
  }
</style>

