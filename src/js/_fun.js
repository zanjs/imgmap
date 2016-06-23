function initSnippet() {
    var snippet = document.querySelector('#codeD');
    hljs.highlightBlock(snippet);
}

function ajaxPostHtml(call) {

    getTitleFrom()

}


function getTitleFrom() {


    var pagei = PL.open({
        type: 1, //1代表页面层
        content: '<input type="text"  id="edmName"  placeholder="请输入 EDM 名称" ><input type="text"  id="edmId"  placeholder="请输入 EDM ID" ><a id="okName">确认</a>',
        style: 'width:300px; height:120px; border:none;',
        success: function(oPan) {
            D("#edmName").focus();

            D("#okName").on("click", function() {

                ajaxCreate(D("#edmName").val(), D("#edmId").val())

                PL.close(pagei)
            })
        }
    });

}


function ajaxCreate(title, id) {

    var str = D("#codeD").text();


    D.ajax({
        type: "POST",
        url: "p2.php",
        data: "t=" + title + "&i=" + str + "&id=" + id,
        success: function(msg) {

            PL.open({
                title: '',
                content: 'edm.htm 生成完成',
                btn: ['预览 edm', '下载  edm'],
                yes: function(index) {
                    window.open('./edm.html')
                },
                no: function() {
                    window.open('./d.php')
                }
            });

        }

    });


}

//获取 emd 图片地址
function getEdmUrl(eid) {

    var id = eid || 75;

    var host = 'http://img.panlidns.com/cms/en/special/css/' + id + '/images/edm.png';

    return host;
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function isLoadOld() {

    var edmId = getCookie('edmId') || false;

    return edmId;

}

function openFrom() {


    var pagei = PL.open({
        type: 1, //1代表页面层
        content: '<input type="text"  id="edmName"  placeholder="请输入 EDM 名称" ><input type="text"  id="edmId"  placeholder="请输入 EDM ID" ><a id="okName">确认</a>',
        style: 'width:300px; height:120px; border:none;',
        success: function(oPan) {
            D("#edmName").focus();

            D("#okName").on("click", function() {

                ajaxCreate(D("#edmName").val(), D("#edmId").val())

                PL.close(pagei)
            })
        }
    });


}

//加载 edm 
function loadEmd() {

    var edmId = getCookie("edmId");
    var src = getEdmUrl(edmId);
    D("#url").val(src);

    D("#button").click();

}