<template>
  <view @click="_onclick">
    <slot :options="options" :loading="loading" :error="errorMessage" />
    <!-- #ifdef MP-WEIXIN -->
    <uniad-plugin class="uniad-plugin" :adpid="adpid" :unit-id="unitId" @load="_onmpload" @close="_onmpclose" @error="_onmperror" @nextChannel="_onnextchannel"></uniad-plugin>
    <uniad-plugin-wx v-if="wxchannel" class="uniad-plugin-wx" @error="_onwxchannelerror"></uniad-plugin-wx>
    <!-- #endif -->
    <!-- #ifdef MP-ALIPAY -->
    <uniad-plugin class="uniad-plugin" :adpid="adpid" @create="_handleAdRef" @load="_onmpload" @close="_onmpclose" @error="_onmperror"></uniad-plugin>
    <!-- #endif -->
    <!-- #ifdef H5 -->
    <div ref="container" />
    <!-- #endif -->
  </view>
</template>

<script>
  // #ifdef APP
  import adMixin from "./ad.mixin.app.js"
  // #endif
  // #ifdef H5
  import adMixin from "./ad-interstitial.web.js"
  // #endif
  // #ifdef MP-WEIXIN
  import adMixin from "./ad.mixin.mp-weixin.js"
  // #endif
  // #ifdef MP-ALIPAY
  import adMixin from "./ad.mixin.mp-alipay.js"
  // #endif

  export default {
    name: 'AdInterstitial',
    mixins: [adMixin],
    props: {
      adType: {
        type: String,
        default: 'Interstitial'
      }
    },
    methods: {
    }
  }
</script>
