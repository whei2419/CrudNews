<template>
  <div :class="newsListData.bgColor" class="toast-message rounded shadow">
    <div class="row">
      <div class="col-2 border-end">
        <i class="sign bi bi-exclamation-circle-fill"></i>
      </div>
      <div class="col-10 align-middle">
        <div class="d-flex align-items-center">
          <p class="text-start textCenter">{{ newsListData.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from "@/stores/newsList";
const newsListData = useCounterStore();
</script>
<style scoped>
.toast-message {
  position: absolute;
  width: 460px;
  color: #ffff;
  z-index: 1;
  text-align: center;
  padding: 20px;
  left: calc(50% - 230px);
  top: 30px;
}
.sign {
  font-size: 40px;
}
</style>
