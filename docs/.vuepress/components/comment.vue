<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

export default {
  name: "comment",
  mounted() {
    const commentConfig = {
      clientID: "1b4d138c1587ac0bc41d",
      clientSecret: "4fd806e27db852913534fe03b83cd58644ecd609",
      repo: "blog",
      owner: "shenggaogao",
      admin: ["shenggaogao"],
      labels: ["gittalk"],
      id: location.href.slice(0, 30),
      name: "大芒果的博客",
    };
    const gitalk = new Gitalk(commentConfig);
    gitalk.render("gitalk-container");
  },
};
</script>