<template>
  <main class="page">
    <slot name="top" />
    <div class="theme-default-content">
      <Content />
      <Comment v-if="ifShowComment" />
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
  data() {
    return {
      ifShowComment: false,
    };
  },
  components: { PageEdit, PageNav, Comment },
  props: ["sidebarItems"],
  methods: {
    showComment(path) {
      const reg = /\.html$/;
      const showComment = reg.test(path);
      this.ifShowComment = showComment;
    },
  },
  watch: {
    $route(value) {
      const { path } = this.$page;
      this.ifShowComment = false;
      // comment需要先卸载再加载，才会重新刷新
      setTimeout(() => {
        this.showComment(path);
      }, 500);
    },
  },
  mounted() {
    const { path } = this.$page;
    this.showComment(path);
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>