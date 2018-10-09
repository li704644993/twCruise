<template>
  <div class="main-content">
    <!-- 卡片 -->
    <div class="card-container">
      <div class="card-list orange">
        <span class="card-text">Building</span>
        <span class="card-icon icon-cog"></span>
        <span class="card-num">3</span>
      </div>
      <div class="card-list green">
        <span class="card-text">Idle</span>
        <span class="card-icon icon-coffee"></span>
        <span class="card-num">5</span>
      </div>
      <div class="card-list card-total">
        <ul class="total-list">
          <li>ALL</li>
          <li>8</li>
        </ul>
        <ul class="total-list">
          <li>PHYSICAL</li>
          <li>4</li>
        </ul>
        <ul class="total-list">
          <li>VIRTUAL</li>
          <li>4</li>
        </ul>
      </div>
    </div>
    <!-- 文件列表 -->
    <div class="file-list-container">
      <div class="file-list-title-container">
        <div class="file-type-container">
          <div :class="{'file-type-list': true, 'active': list.select}" @click="selectFileType(list.id)" v-for="list in fileClassifyList" :key="list.id">{{list.name}}</div>
        </div>

        <div class="file-search-container">
          <span v-show="!hideSearchIcon" class="icon-search file-search-icon"></span>
          <input class="file-search" v-on:input="doFileSearch" type="text" v-model="searchText">
        </div>

        <div class="file-layout-container">
          <div v-for="layout in layoutType" :key="layout.id" @click="changeLayoutType(layout.id)"
           v-bind:class="{'file-layout-box': true, 'active': layout.select}">
            <span v-bind:class="layout.icon"></span>
          </div>
        </div>
      </div>

      <!-- 文件列表 -->
      <div class="file-list-content-container">
        <div class="file-list-container">
          <div class="file-list-left">
            <img class="file-img" src="@/assets/osIcons/windows.png">
          </div>
          <div class="file-list-right">
            <div class="file-list-info">
              <div class="flex align-center">
                <span class="file-list-icon icon-desktop"></span>
                <div class="file-list-url">ewrwerwerewrr.thoughtworks.org</div>
              </div>
              <span class="file-list-flag badge success">idle</span>
              <div class="flex align-center">
                <span class="file-list-icon icon-info"></span>
                <span class="file-text">198.168.1.19</span>
              </div>
              <div class="flex align-center">
                <span class="file-list-icon icon-folder"></span>
                <span class="file-text">/var/lib/cruise-agent</span>
              </div>
            </div>
            <div class="file-list-options">
              <div class="file-list-left-options">
                <div class="file-list-btn btn btn-primary">
                  <span class="icon-plus"></span>
                </div>
                <div class="file-list-btn btn">Firefox
                  <span class="icon-trash"></span>
                </div>
                <div class="file-list-btn btn">Safari
                  <span class="icon-trash"></span>
                </div>
                <div class="file-list-btn btn">Ubuntu
                  <span class="icon-trash"></span>
                </div>
                <div class="file-list-btn btn">Chrome
                  <span class="icon-trash"></span>
                </div>
              </div>
              <div class="file-list-right-options">
                <div class="file-list-btn btn btn-primary">
                  <span class="icon-deny"></span>
                  Deny
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="file-list-container" v-for="file in fileList" :key="file.id">
          <div class="file-list-left">
            <img class="file-img" v-bind:src="file.img">
          </div>
          <div class="file-list-right">
            <div class="file-list-info">
              <div class="flex align-center">
                <span class="file-list-icon icon-desktop"></span>
                <div class="file-list-url">{{file.url}}</div>
              </div>
              <span v-bind:class="{'file-list-flag badge': true, 'success': file.fileTypeObj.id == 2, 'warning': file.fileTypeObj.id == 1}">
                {{file.fileTypeObj.value}}
              </span>
              <div class="flex align-center">
                <span class="file-list-icon icon-info"></span>
                <span class="file-text">{{file.ip}}</span>
              </div>
              <div class="flex align-center">
                <span class="file-list-icon icon-folder"></span>
                <span class="file-text">{{file.fileAddress}}</span>
              </div>
            </div>
            <div class="file-list-options">
              <div class="file-list-left-options">
                <div class="file-list-btn btn btn-primary">
                  <span class="icon-plus"></span>
                </div>
                <div class="file-list-btn btn">Firefox
                  <span class="icon-trash"></span>
                </div>
                <div class="file-list-btn btn">Safari
                  <span class="icon-trash"></span>
                </div>
                <div class="file-list-btn btn">Ubuntu
                  <span class="icon-trash"></span>
                </div>
                <div class="file-list-btn btn">Chrome
                  <span class="icon-trash"></span>
                </div>
              </div>
              <div class="file-list-right-options">
                <div class="file-list-btn btn btn-primary">
                  <span class="icon-deny"></span>
                  Deny
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const windowsImg = require('@/assets/osIcons/windows.png')
const ubuntuImg = require('@/assets/osIcons/ubuntu.png')
const debinImg = require('@/assets/osIcons/debin.png')
const suseImg = require('@/assets/osIcons/windows.png')
const cent_osImg = require('@/assets/osIcons/cent_os.png')
export default {
  name: 'agent',
  data () {
    return {
      // 搜索内容
      searchText: '',
      // 隐藏搜索图标
      hideSearchIcon: false,
      // 文件分类
      fileClassifyList: [
        { name: 'All', id: 1, select: true },
        { name: 'Physical', id: 2, select: false },
        { name: 'Virtual', id: 3, select: false }
      ],
      // 布局排列方式
      layoutType: [{ id: 1, icon: 'icon-th-card', select: false }, { id: 2, icon: 'icon-th-list', select: true }],
      // 文件类型
      fileTypeList: [{ id: 1, value: 'building', title: 'Building', total: 0 }, { id: 2, value: 'idle', title: 'Idle', total: 0 }],
      // 文件列表
      fileList: [
        {
          id: 1,
          img: windowsImg,
          url: 'bjstdmngbgr01.thoughtworks.com',
          fileType: 2,
          fileTypeObj: null,
          ip: '192.168.1.102',
          fileAddress: '/var/lib/cruise-agent'
        },
        {
          id: 2,
          img: windowsImg,
          url: 'bjstdmngbgr08.thoughtworks.com',
          fileType: 1,
          fileTypeObj: null,
          ip: '192.168.1.243',
          fileAddress: '/var/lib/cruise-agent'
        },
        {
          id: 3,
          img: ubuntuImg,
          url: 'bjstdmngbgr10.thoughtworks.com',
          fileType: 1,
          fileTypeObj: null,
          ip: '192.168.1.80',
          fileAddress: '/var/lib/cruise-agent'
        },
        {
          id: 4,
          img: debinImg,
          url: 'bjstdmngbgr11.thoughtworks.com',
          fileType: 1,
          fileTypeObj: null,
          ip: '192.168.1.117',
          fileAddress: '/var/lib/cruise-agent'
        },
        {
          id: 5,
          img: suseImg,
          url: 'bjstdmngbgr15.thoughtworks.com',
          fileType: 2,
          fileTypeObj: null,
          ip: '192.168.1.110',
          fileAddress: '/var/lib/cruise-agent'
        },
        {
          id: 6,
          img: cent_osImg,
          url: 'bjstdmngbgr01.thoughtworks.com',
          fileType: 2,
          fileTypeObj: null,
          ip: '192.168.1.102',
          fileAddress: '/var/lib/cruise-agent'
        }
      ]
    }
  },

  created() {
    this.initData()
  },

  methods: {
    initData() {
      // 初始化类型统计
      for (let i = 0; i < this.fileList.length; i++) {
        for (let j = 0; j < this.fileTypeList.length; j++) {
          if (this.fileList[i].fileType === this.fileTypeList[j].id) {
            this.fileTypeList[j].total++
            this.fileList[i].fileTypeObj = this.fileTypeList[j]
          }
        }
      }
    },

    // 选择文件类型
    selectFileType(id) {
      for (let i = 0; i < this.fileClassifyList.length; i++) {
        if (this.fileClassifyList[i].id === id) {
          this.fileClassifyList[i].select = true
        } else {
          this.fileClassifyList[i].select = false
        }
      }
    },

    // 文件搜索
    doFileSearch() {
      this.hideSearchIcon = !!this.searchText
    },

    // 改变布局类型
    changeLayoutType(id) {
      this.layoutType.forEach(function (v, i) {
        if (v.id === id) {
          v.select = true
        } else {
          v.select = false
        }
      })
    }
  },

  components: {
  }
}
</script>
<style type="text/css" lang="scss" scoped>
  @import  '@/views/agent/agent.scss';
</style>
