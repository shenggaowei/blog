<template>
  <div v-show="ifShowComment" class="gitalk-container theme-default-content">
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

export default {
  data() {
    return {
      ifShowComment: false,
    };
  },
  name: "Comment",
  watch: {
    $route(value) {
      const { path } = this.$page;
      this.showComment(path);
    },
  },
  mounted() {
    const { title = "", path } = this.$page;
    const commentConfig = {
      clientID: "1b4d138c1587ac0bc41d",
      clientSecret: "4fd806e27db852913534fe03b83cd58644ecd609",
      repo: "blog",
      owner: "shenggaogao",
      admin: ["shenggaogao"],
      labels: ["gittalk", title.replace(/\s+/g, "")],
      id: title.replace(/\s+/g, ""),
      name: "大芒果的博客",
    };
    const gitalk = new Gitalk(commentConfig);
    gitalk.render("gitalk-container");
    this.showComment(path);
  },
  methods: {
    showComment(path) {
      const noShowPage = ["/"];
      this.ifShowComment = noShowPage.indexOf(path) === -1;
    },
  },
};
</script>