/**
 * 全局音乐管理器
 * 实现跨页面连续播放背景音乐（记录播放进度）
 */

(function() {
  'use strict';

  // 全局音乐管理器
  window.MusicPlayer = {
    audio: null,
    isInitialized: false,
    progressInterval: null,

    // 初始化音乐播放器
    init: function() {
      if (this.isInitialized) {
        return;
      }

      // 创建全局 audio 元素
      this.audio = new Audio('../music/1.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.6; // 设置音量为60%

      // 恢复之前的播放进度
      var savedTime = localStorage.getItem('musicCurrentTime');
      if (savedTime && !isNaN(savedTime)) {
        this.audio.currentTime = parseFloat(savedTime);
      }

      // 定期保存播放进度
      var self = this;
      this.progressInterval = setInterval(function() {
        if (self.audio && !self.audio.paused) {
          localStorage.setItem('musicCurrentTime', self.audio.currentTime);
          localStorage.setItem('musicLastUpdate', Date.now());
        }
      }, 500); // 每0.5秒保存一次进度

      // 音乐加载完成后的事件
      this.audio.addEventListener('loadedmetadata', function() {
        console.log('Music duration:', self.audio.duration);
      });

      // 标记为已初始化
      this.isInitialized = true;
      localStorage.setItem('musicInitialized', 'true');

      console.log('Music player initialized, restored time:', savedTime || 0);
    },

    // 播放音乐
    play: function() {
      if (!this.audio) {
        this.init();
      }

      // 检查上次更新时间，如果超过5秒，说明音乐可能需要调整进度
      var lastUpdate = localStorage.getItem('musicLastUpdate');
      if (lastUpdate) {
        var timeDiff = (Date.now() - parseInt(lastUpdate)) / 1000; // 转换为秒
        if (timeDiff > 1 && timeDiff < 300) { // 如果时间差在1秒到5分钟之间
          // 调整音乐进度，补偿页面切换的时间
          var savedTime = parseFloat(localStorage.getItem('musicCurrentTime') || 0);
          this.audio.currentTime = savedTime + timeDiff;
        }
      }

      // 尝试播放
      var self = this;
      var playPromise = this.audio.play();

      if (playPromise !== undefined) {
        playPromise.then(function() {
          console.log('Music playing from:', self.audio.currentTime);
          localStorage.setItem('musicPlaying', 'true');
        }).catch(function(error) {
          console.log('Auto-play prevented:', error);
          // 某些浏览器需要用户交互才能播放
        });
      }
    },

    // 暂停音乐
    pause: function() {
      if (this.audio) {
        this.audio.pause();
        localStorage.setItem('musicPlaying', 'false');
        // 保存当前进度
        localStorage.setItem('musicCurrentTime', this.audio.currentTime);
      }
    },

    // 设置音量 (0-1)
    setVolume: function(volume) {
      if (this.audio) {
        this.audio.volume = Math.max(0, Math.min(1, volume));
      }
    },

    // 检查是否正在播放
    isPlaying: function() {
      return this.audio && !this.audio.paused;
    },

    // 获取当前播放时间
    getCurrentTime: function() {
      return this.audio ? this.audio.currentTime : 0;
    },

    // 设置播放时间
    setCurrentTime: function(time) {
      if (this.audio) {
        this.audio.currentTime = time;
      }
    }
  };

  // 页面加载时自动初始化和播放
  window.addEventListener('DOMContentLoaded', function() {
    // 初始化播放器
    MusicPlayer.init();

    // 检查是否应该播放
    var wasPlaying = localStorage.getItem('musicPlaying');
    if (wasPlaying === null || wasPlaying === 'true') {
      // 默认播放或之前正在播放
      setTimeout(function() {
        MusicPlayer.play();
      }, 100); // 延迟100ms确保页面加载完成
    }
  });

  // 添加用户交互监听器，确保音乐在首次点击时开始播放
  var userInteracted = false;
  var startMusicOnInteraction = function() {
    if (!userInteracted) {
      userInteracted = true;
      if (!MusicPlayer.isPlaying()) {
        MusicPlayer.play();
      }
      // 移除监听器
      document.removeEventListener('click', startMusicOnInteraction);
      document.removeEventListener('touchstart', startMusicOnInteraction);
      document.removeEventListener('keydown', startMusicOnInteraction);
    }
  };

  document.addEventListener('click', startMusicOnInteraction);
  document.addEventListener('touchstart', startMusicOnInteraction);
  document.addEventListener('keydown', startMusicOnInteraction);

  // 页面卸载前保存状态和进度
  window.addEventListener('beforeunload', function() {
    if (MusicPlayer.audio) {
      localStorage.setItem('musicCurrentTime', MusicPlayer.audio.currentTime);
      localStorage.setItem('musicLastUpdate', Date.now());
      if (MusicPlayer.isPlaying()) {
        localStorage.setItem('musicPlaying', 'true');
      }
    }
  });

  // 页面可见性变化时处理
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      // 页面隐藏时保存进度
      if (MusicPlayer.audio && !MusicPlayer.audio.paused) {
        localStorage.setItem('musicCurrentTime', MusicPlayer.audio.currentTime);
        localStorage.setItem('musicLastUpdate', Date.now());
      }
    } else {
      // 页面显示时恢复播放
      if (localStorage.getItem('musicPlaying') === 'true') {
        if (!MusicPlayer.isPlaying()) {
          MusicPlayer.play();
        }
      }
    }
  });

})();
