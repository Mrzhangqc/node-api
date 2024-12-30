# 指定基础镜像
# 使用 Node.js 的 20.8.0 版本，基于 Debian
FROM node:20.8.0-buster

# 设置工作目录
WORKDIR /app

# 复制项目文件到容器
COPY . .

# 安装依赖
RUN npm install
 
# 设置时区
RUN rm -rf /etc/localtime && ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN ls
EXPOSE 5001
 
ENTRYPOINT ["npm", "run"]
CMD ["start"]