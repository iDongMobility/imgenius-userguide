# 使用AR智能眼镜和远程指导

## 硬件要求
PDA需要支持OTG功能，部分机型需要手动开启，并且超过一定时间不使用将自动关闭
## 启用功能
* SDC设置中`启用远程指导`功能

    ![enable](./images/远程指导1.png)
* 申请`后台专家`授权，可在SMC中查看已安装授权

    ![license](./images/远程指导2.png)
* SDC中给指定用户勾上`后台专家`权限

    ![auth](./images/远程指导3.png)
* PDA安装亮亮插件版移动工作站`imMW_LLPlugin.apk`

## 使用步骤
### PDA端
* 启用OTG功能
* 连接AR智能眼镜

    ![connect1](./images/远程指导4.jpg)
    ![connect2](./images/远程指导5.jpg)
    ![connect3](./images/远程指导6.jpg)
* 发起`远程指导`请求

    ![request1](./images/远程指导7.png)
    > [!warning] 
    > 注意，作业组执行中发起时，此次远程指导将绑定当前作业组。
* 进入`远程指导`页面，等待`后台专家`接入

    ![request2](./images/远程指导8.jpg)
* 点击`开始推流`，语音交流

    ![request3](./images/远程指导11.jpg)
* 可以进行文字聊天

    ![request4](./images/远程指导13.jpg)

### EOC端
* `后台专家`登录EOC后点击图示按钮进入`远程指导`页面

    ![expert1](./images/远程指导9.png)
* 加入需要协助的远程指导

    ![expert2](./images/远程指导10.png)
* 可以语音，文字交流

    ![expert3](./images/远程指导12.png)
* 可以对画面中的物品进行标记，PDA可同时看到此标记

    ![expert4](./images/远程指导14.png)

### 远程指导历史查看
* 点击选项卡`远程指导列表`

    ![history1](./images/远程指导15.png)
* 点击眼镜按钮，查看绑定作业组
* 点击放大镜按钮，进入`查看详细会话`，查看远程指导视频和文字记录

    ![history2](./images/远程指导16.png)
