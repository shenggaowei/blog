<template>
  <main class="page">
    <slot name="top" />
    <div class="theme-default-content">
      <Content />
      <Comment />
    </div>
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";
import Comment from "@theme/components/comment.vue";

export default {
  components: { PageEdit, PageNav, Comment },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>