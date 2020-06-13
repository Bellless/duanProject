(function(win) {
    var tid;
    // 判断是否移动端访问,分别加载不同的css和js
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // alert("手机端")
        // 动态添加移动端css或者js
        // document.write('<link href="./dist/css/index.css" type="text/css" rel=stylesheet>');
        // document.write('<script type="text/javascript" charset="utf-8" src="./dist/js/123.js"><\/script>');
        // rem单位转换 动态加载font-size根元素
        function refreshRem() {
            let designSize = 750; // 移动端设计图尺寸
            let html = document.documentElement;
            let wW = html.clientWidth; // 窗口宽度
            let rem = wW * 100 / designSize;
            document.documentElement.style.fontSize = rem + 'px';
        }
        win.addEventListener('resize', function() {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }, false);
        win.addEventListener('pageshow', function(e) {
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        }, false);
        refreshRem();
    } else {
        // alert("PC端")
        // // 动态添加PC端css或者js
        document.write('<link href="./dist/css/pc_index.css" type="text/css" rel=stylesheet>');

        function refreshRem() {
            let designSize = 1920; // PC端设计图尺寸
            let html = document.documentElement;
            let wW = html.clientWidth; // 窗口宽度
            let rem = wW * 100 / designSize;
            document.documentElement.style.fontSize = rem + 'px';
        }
        win.addEventListener('resize', function() {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }, false);
        win.addEventListener('pageshow', function(e) {
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        }, false);
        refreshRem();
    }
})(window);