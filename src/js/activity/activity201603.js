require([
    'underscore',
    'jquery',
    'semanticUI',
    'activity/201603/choose/view'
], function (_, $, semanticUI,ChooseView) {
    (new ChooseView({
        pics : [ "/image/activity201603/coleflower1.jpg",
            "/image/activity201603/coleflower2.jpg",
            "/image/activity201603/coleflower3.jpg",
            "/image/activity201603/coleflower4.jpg" ],
        title:"奉贤油菜花",
        tags:['自驾','油菜花'],
        time:"三月底~四月初",
        cost:"AA",
        address:'<a target="_blank" href="http://map.baidu.com/?newmap=1&amp;s=con%26wd%3D%E4%B8%8A%E6%B5%B7%E5%B8%82%E5%A5%89%E8%B4%A4%E5%8C%BA%E5%BA%84%E8%A1%8C%E9%95%87%26c%3D289&amp;from=alamap&amp;tpl=mapdots">上海市奉贤区庄行镇</a>',
        introduce:'春天在哪里？在踏青里，在郊游里，在牛毛细雨中，更在江南人的油菜花田里。范成大有诗云：“沃田桑景晚，平野菜花春。”更见一幅思念已久的田园风光。如果想去踏青，何不脱去冬的疲惫，换上春的行头，到田野间去遥望这璀璨的金黄？带你寻找上海周边最美的油菜花田，让你度过3月里最美的周末时光……<a href="http://www.mafengwo.cn/travel-news/212039.html" target="_blank">查看详情</a>,<a href="http://www.mafengwo.cn/i/854285.html" target="_blank">旅游参考</a>',
        likes:0
    }).render().$el).appendTo($("#choose-list"));
    (new ChooseView({
        className:"activity-choose-item pic-pull-right",
        pics : [
            "/image/activity201603/chongming01.jpg",
            "/image/activity201603/chongming02.jpg",
            "/image/activity201603/chongming04.jpg",
            "/image/activity201603/chongming05.jpg",
            "/image/activity201603/chongming03.jpg",
        ],
        title:"崇明岛东平国家森林公园野餐桌游",
        tags:['野餐','桌游','烧烤'],
        time:"三月底~四月初",
        cost:"AA",
        address:'<a target="_blank" href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D%E4%B8%9C%E5%B9%B3%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD">东平国家森林公园</a>',
        introduce:'野餐郊游什么的，最爱了！有张薰衣草的是5月份，这次就别想了/(ㄒoㄒ)/~~<a href="http://trip.elong.com/dpsenlingongyuan/" target="_blank">查看详情</a>',
        likes:0
    }).render().$el).appendTo($("#choose-list"));
    (new ChooseView({
        pics : [
            "/image/activity201603/owlcity01.jpg",
            "/image/activity201603/owlcity02.jpg",
        ],
        title:"来个远的？火星？你们也想想吧",
        tags:['自由发挥','全员参与'],
        time:"三月底~四月初",
        cost:"AA",
        address:'不要太远',
        introduce:'除了爬山什么的，应该都不错',
        likes:0
    }).render().$el).appendTo($("#choose-list"));

});
