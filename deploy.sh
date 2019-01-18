# 删除该目录下 以前的文件 重新部署
echo  "\033[47;30;5m begin deploy your project... \033[0m vuepress static website \n"
cd html/
echo  "\033[43;35m begin delete all files \033[0m \n" 

rm -fr *
touch index.nginx-debian.html 
echo  "\033[43;35m begin delete all files success! \033[0m \n" 

echo  "\033[47;30;5m begin clone your project from your github... \033[0m superMario \n"

git clone https://github.com/maliaoMJ/superMario.git

echo  "\033[43;35m clone files complete! \033[0m \n" 

cd superMario/
npm install
echo  "\033[47;30;5m begin build your project... \033[0m superMario \n"

npm run build

echo  "\033[43;35m build project success! \033[0m \n" 

mv -f docs/.vuepress/dist/*  ../
mv  index.html index.nginx-debian.html 

echo  "\033[43;35m SUCCESS!! \033[0m \n" 