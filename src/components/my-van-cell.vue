<template>
  <div>
    <div>
      这是接收标题区域 title 内容的插槽
      <slot name="title"></slot>
    </div>
    <div>
      这是接收标题下方区域 label 内容的插槽
      <slot name="label"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>