cd /root/shenggao/blog/gao_blog
echo "1. 进入工作目录"
git pull origin master
echo "2. 代码拉拉取成功"
npm run build
echo "3. 打包从成功"
rm -rf /root/shenggao/nginx/dist
cp -rf /root/shenggao/blog/gao_blog/docs/.vuepress/dist /root/shenggao/nginx
echo "4. 部署完成"
