**SQL Server以2017为例，在安装组件中如下配置：**
 
**1. 点击安装包中的“SETUP.EXE”**，在弹出的安装中心窗口中选择“安装”→“全新SQL Server 独立安装或向现有安装添加功能”，之后在弹出的安装程序窗口中一直下一步（后续无说明的项操作都是下一步），直到安装类型这一步骤里，选择“执行SQL Server2017的全新安装”

![shujuku](./images/shujuku1.png)
![shujuku](./images/shujuku2.png)
![shujuku](./images/shujuku3.png)

**2. 产品密钥**：指定版本为“Developer”勾选“输入产品密钥”，不用输入

![shujuku](./images/shujuku4.png)

**3. 功能选择**：选择“数据库引擎服务”，实例根目录自行设置或默认

![shujuku](./images/shujuku5.png)

**4. 实例配置**：勾选“默认实例”

![shujuku](./images/shujuku6.png)

**5. 数据库引擎配置**：服务器配置下身份验证模式中勾选“混合模式”，密码自行设置，指定SQL Server管理员，点击“添加当前用户”，之后在数据目录中自行设置好各项目录

![shujuku](./images/shujuku7.png)
![shujuku](./images/shujuku8.png)

**6. 安装完成之后**，如果需要可在官网下载SSMS的安装包，不需要则忽略此步，点击安装即可。

![shujuku](./images/shujuku9.png)

附：

[安装PostgresSQL](附录/安装PostgresSQL.md)

[安装MongoDB](附录/安装MongoDB.md)

[安装RabbitMQ](附录/安装RabbitMQ.md)