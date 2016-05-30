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
    success: function(oPan){
       D("#edmName").focus();
       
        D("#okName").on("click",function () {
                    
                ajaxCreate(D("#edmName").val(),D("#edmId").val())
                
                PL.close(pagei)
        })
      }
    });
    
}


function ajaxCreate(title,id) {
    
    var str =  D("#codeD").text();
    
    
    D.ajax({
            type: "POST",
            url: "p2.php",
            data: "t="+ title +"&i="+str+"&id="+id,
            success: function(msg){
                
                PL.open({
                    title: '',
                    content: 'edm.htm 生成完成',
                    btn: ['预览 edm', '下载  edm'],
                    yes: function(index){
                        window.open('./edm.html')
                    }, no: function(){
                        window.open('./d.php')
                    }
                });

            }

        });
    
    
}