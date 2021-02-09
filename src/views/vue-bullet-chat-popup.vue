<template>
  <transition name="bullet-chat-fade">
    <div v-show="vbcPopupVisAble" tabindex="-1" :style="style" class="bullet-chat-popup" @click.stop>
      <div class="bullet-chat-mask" @click="handleClick"></div>
      <transition name="bullet-chat-slide">
        <div class="bullet-chat-dialog" v-show="show" :style="dialogStyle">
          <div class="vbc-popup-top vbc-flex-sb">
            <div v-for="(item, index) in topTitle" :key="index" :class="{'vbc-popup-top-active': item === active}">
              <span @click="handleClickTop(item)">{{item}}</span>
            </div>
          </div>
          <div class="bullet-chat-content">
            <div v-for="(item, index) in textOpt" :key="index" class="content-item">
              <p class="bullet-chat-cont-title">{{item.header}}</p>
              <div class="cont-item">
                <span v-for="(spanItem, i) in item.selectOpt" :key="i" :class="{'one-span':item.type === 1, 'two-span': item.type === 2 || item.type === 3 || item.type === 4, active: spanItem.active, activeColor: spanItem.active }" :style="{background: spanItem.background}" @click="handleSpan(spanItem, index)">
                  {{spanItem.label}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "VueBulletChatPopup",
    props: {
      vbcPopupVisAble: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 300
      }
    },
    data() {
      return {
        topTitle: ['文字', '背景', '音乐'],
        active: '文字',
        show: false,
        textOpt: [{
          header: '效果（多选）',
          type: 1,
          selectOpt: [{
            label: '阴影',
            value: 'vbc-text-shadow',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '叠字',
            value: 'vbc-text-double',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '闪烁',
            value: 'vbc-text-twinkle',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '描边',
            value: 'vbc-text-stroke',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '酷炫',
            value: 'vbc-text-masked',
            active: false,
            background: '#3d3d3d'
          }]
        }, {
          header: '字体颜色',
          type: 2,
          selectOpt: [{
            label: '',
            value: '1',
            active: true,
            background: "white",
          }, {
            label: '',
            value: '2',
            active: false,
            background: 'red'
          }, {
            label: '',
            value: '3',
            active: false,
            background: '#FD2E74'
          }, {
            label: '',
            value: '4',
            active: false,
            background: '#FCDE46'
          }, {
            label: '',
            value: '5',
            active: false,
            background: '#FD2E74'
          }, {
            label: '',
            value: '6',
            active: false,
            background: '#61FE4B'
          }, {
            label: '',
            value: '7',
            active: false,
            background: '#41A0FE'
          }, {
            label: '',
            value: '8',
            active: false,
            background: '#FC5727'
          }, {
            label: '',
            value: '9',
            active: false,
            background: '#8911FE'
          }, {
            label: '',
            value: '10',
            active: false,
            background: '#65FFC9'
          }]
        }, {
          header: '速度',
          type: 3,
          selectOpt: [{
            label: '静止',
            value: '0',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '0.5x',
            value: '1',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '1x',
            value: '2',
            active: true,
            background: '#3d3d3d'
          }, {
            label: '1.5x',
            value: '3',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '2x',
            value: '4',
            active: false,
            background: '#3d3d3d'
          }]
        }, {
          header: '字号',
          type: 4,
          selectOpt: [{
            label: '24',
            value: '24',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '36',
            value: '36',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '48',
            value: '48',
            active: true,
            background: '#3d3d3d'
          }, {
            label: '64',
            value: '64',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '72',
            value: '72',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '120',
            value: '120',
            active: false,
            background: '#3d3d3d'
          }]
        }, {
          header: '字体',
          type: 5,
          selectOpt: [{
            label: '宋体',
            value: '宋体',
            active: false,
            background: '#3d3d3d'
          }, {
            label: '宋体',
            value: '宋体',
            active: false,
            background: '#3d3d3d'
          }]
        }]
      }
    },
    watch: {
      vbcPopupVisAble(v) {
        this.show = v
      }
    },
    computed: {
      style() {
        return {
          animationDuration: `${this.duration}ms`
        };
      },
      dialogStyle() {
        return {
          animationDuration: `${this.duration}ms`,
        }
      }
    },
    mounted() {
      this.textOpt = this.utils.get('textOpt', true) || this.textOpt
    },
    methods: {
      handleClickTop(v) {
        this.active = v
      },
      handleClick() {
        this.$emit('update:vbcPopupVisAble', false)
      },
      handleSpan(item, index) {
        this.textOpt[index].selectOpt.map(val => {
          if(val.active) {
            val.active = false
          }
        })
        if(!item.active) {
          item.active = true
        }
        if(index === 0) {
          this.$emit('effect', item.value)
          this.utils.set('vbcEffect', item.value)
        } else if(index === 1) {
          this.$emit('color', item.background)
          this.utils.set('vbcColor', item.background)
        }else if(index === 2) {
          this.$emit('speed', item.value)
          this.utils.set('vbcSpeed', item.value)
        }else if (index === 3) {
          this.$emit('fontSize', item.value + 'px')
          this.utils.set('vbcFontSize', item.value + 'px')
        }
        this.utils.set('textOpt', JSON.stringify(this.textOpt))
      },
    }
  }
</script>
