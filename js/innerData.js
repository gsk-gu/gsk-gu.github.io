/**
 * 初始化博客,加载配置数据
 */

$(document).ready(function(){
    $(function(){
        document.getElementsByTagName("link")[0].href=data.webIconURL;
        document.getElementsByTagName("title")[0].innerText=data.webTitle;
    });
    //博客名字和个性签名
   $(function(){
    // document.getElementById("bloger-name").innerHTML=data.bloger;
    // document.getElementById("signature").innerHTML=data.signature;
    let typedB=new Typed("#bloger-name",{
        strings:[data.bloger],
        typeSpeed:30,
        showCursor:false
      });
      let typedS=new Typed("#signature",{
        strings:[data.signature],
        typeSpeed:30,
        showCursor:false,
        onComplete:()=>{showWein()}
      });
   });
//    fa fa-heartbeat
   //网站极本信息
   function showWein(){
   $(function(){
    var websiteIn=document.getElementsByClassName("web-in");
    websiteIn[0].innerHTML=data.bloger+" ";
    websiteIn[1].classList.add("fa",data.copyright);
    websiteIn[2].innerHTML=" "+new Date().getFullYear();
   });
//初始化社交账号
   $(function(){
       var rootTag=document.getElementsByClassName("website")[0];
        if(data.Email){
            var emailDiv=document.createElement("div");
            emailDiv.classList.add("website-some");
            var iconSpan=document.createElement("span");
            iconSpan.classList.add("fa","fa-envelope-o");
            var leftText=document.createTextNode(" [ ");
            var rightText=document.createTextNode(" ]");
            var accountSpan=document.createElement("span");
            accountSpan.classList.add("account");
            var accountText=document.createTextNode(data.EmailURL);
            var emailA=document.createElement("a");
            emailA.href="mailto:"+data.EmailURL;
            
            //append
            emailA.appendChild(accountText);
            accountSpan.appendChild(emailA);
            emailDiv.appendChild(iconSpan);
            emailDiv.appendChild(leftText);
            emailDiv.appendChild(accountSpan);
            emailDiv.appendChild(rightText);
            rootTag.appendChild(emailDiv);
        }
        if(data.Twitter){
            var emailDiv=document.createElement("div");
            emailDiv.classList.add("website-some");
            var iconSpan=document.createElement("span");
            iconSpan.classList.add("fa","fa-twitter");
            var leftText=document.createTextNode(" [ ");
            var rightText=document.createTextNode(" ]");
            var accountSpan=document.createElement("span");
            accountSpan.classList.add("account");
            var accountText=document.createTextNode(data.TwitterURL);
            var emailA=document.createElement("a");
            emailA.href=data.TwitterURL;
            
            //append
            emailA.appendChild(accountText);
            accountSpan.appendChild(emailA);
            emailDiv.appendChild(iconSpan);
            emailDiv.appendChild(leftText);
            emailDiv.appendChild(accountSpan);
            emailDiv.appendChild(rightText);
            rootTag.appendChild(emailDiv);
        }
        if(data.GitHub){
            var emailDiv=document.createElement("div");
            emailDiv.classList.add("website-some");
            var iconSpan=document.createElement("span");
            iconSpan.classList.add("fa","fa-github");
            var leftText=document.createTextNode(" [ ");
            var rightText=document.createTextNode(" ]");
            var accountSpan=document.createElement("span");
            accountSpan.classList.add("account");
            var accountText=document.createTextNode(data.GitHubURL);
            var emailA=document.createElement("a");
            emailA.href=data.GitHubURL;
            
            //append
            emailA.appendChild(accountText);
            accountSpan.appendChild(emailA);
            emailDiv.appendChild(iconSpan);
            emailDiv.appendChild(leftText);
            emailDiv.appendChild(accountSpan);
            emailDiv.appendChild(rightText);
            rootTag.appendChild(emailDiv);
        }
        if(data.WeiBo){
            var emailDiv=document.createElement("div");
            emailDiv.classList.add("website-some");
            var iconSpan=document.createElement("span");
            iconSpan.classList.add("fa","fa-weibo");
            var leftText=document.createTextNode(" [ ");
            var rightText=document.createTextNode(" ]");
            var accountSpan=document.createElement("span");
            accountSpan.classList.add("account");
            var accountText=document.createTextNode(data.WeiBoURL);
            var emailA=document.createElement("a");
            emailA.href=data.WeiBoURL;
            
            //append
            emailA.appendChild(accountText);
            accountSpan.appendChild(emailA);
            emailDiv.appendChild(iconSpan);
            emailDiv.appendChild(leftText);
            emailDiv.appendChild(accountSpan);
            emailDiv.appendChild(rightText);
            rootTag.appendChild(emailDiv); 
        }
        if(data.Google){
            var emailDiv=document.createElement("div");
            emailDiv.classList.add("website-some");
            var iconSpan=document.createElement("span");
            iconSpan.classList.add("fa","fa-google");
            var leftText=document.createTextNode(" [ ");
            var rightText=document.createTextNode(" ]");
            var accountSpan=document.createElement("span");
            accountSpan.classList.add("account");
            var accountText=document.createTextNode(data.GoogleURL);
            var emailA=document.createElement("a");
            emailA.href=data.GoogleURL;
            
            //append
            emailA.appendChild(accountText);
            accountSpan.appendChild(emailA);
            emailDiv.appendChild(iconSpan);
            emailDiv.appendChild(leftText);
            emailDiv.appendChild(accountSpan);
            emailDiv.appendChild(rightText);
            rootTag.appendChild(emailDiv);
        }
        if(data.QQ){
            var emailDiv=document.createElement("div");
            emailDiv.classList.add("website-some");
            var iconSpan=document.createElement("span");
            iconSpan.classList.add("fa","fa-qq");
            var leftText=document.createTextNode(" [ ");
            var rightText=document.createTextNode(" ]");
            var accountSpan=document.createElement("span");
            accountSpan.classList.add("account");
            var accountText=document.createTextNode(data.QQacount);
            
            //append
            accountSpan.appendChild(accountText);
            emailDiv.appendChild(iconSpan);
            emailDiv.appendChild(leftText);
            emailDiv.appendChild(accountSpan);
            emailDiv.appendChild(rightText);
            rootTag.appendChild(emailDiv); 
        }
        if(data.WeChat){
            var emailDiv=document.createElement("div");
            emailDiv.classList.add("website-some");
            var iconSpan=document.createElement("span");
            iconSpan.classList.add("fa","fa-wechat");
            var leftText=document.createTextNode(" [ ");
            var rightText=document.createTextNode(" ]");
            var accountSpan=document.createElement("span");
            accountSpan.classList.add("account");
            
            var accountText=document.createTextNode(data.WeChatacount);
            
            //append
            accountSpan.appendChild(accountText);
            emailDiv.appendChild(iconSpan);
            emailDiv.appendChild(leftText);
            emailDiv.appendChild(accountSpan);
            emailDiv.appendChild(rightText);
            rootTag.appendChild(emailDiv);  
        }
        if(data.busuangzi){//初始化网站访问人数
            if(data.visitor){ //访客人数
                var emailDiv=document.createElement("div");
                emailDiv.classList.add("website-some");
                var iconSpan=document.createElement("span");
                iconSpan.classList.add("fa","fa-user");
                var leftText=document.createTextNode(" [ ");
                var rightText=document.createTextNode(" ]");
                let busuangzi=document.createElement("span");
                busuangzi.id="busuanzi_container_site_uv";
                let visitor=document.createElement("span");
                visitor.id="bbusuanzi_value_site_uv";
                
                //append
                 busuangzi.appendChild(visitor);
                emailDiv.appendChild(iconSpan);
                emailDiv.appendChild(leftText);
                emailDiv.appendChild(busuangzi);
                emailDiv.appendChild(rightText);
                rootTag.appendChild(emailDiv); 
            }
            if(data.allVisitCount){ //总访问量
            var emailDiv=document.createElement("div");
            emailDiv.classList.add("website-some");
            var iconSpan=document.createElement("span");
            iconSpan.classList.add("fa","fa-eye");
            var leftText=document.createTextNode(" [ ");
            var rightText=document.createTextNode(" ]");
            let busuangzi=document.createElement("span");
            busuangzi.id="busuanzi_container_site_uv";
            let allvistCount=document.createElement("span");
            allvistCount.id="busuanzi_value_site_pv";
            
            //append
             busuangzi.appendChild(allvistCount);
            emailDiv.appendChild(iconSpan);
            emailDiv.appendChild(leftText);
            emailDiv.appendChild(busuangzi);
            emailDiv.appendChild(rightText);
            rootTag.appendChild(emailDiv); 
            }
            //添加不蒜子脚步
            let scriptTag=document.createElement("script");
            scriptTag.src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
            document.getElementsByTagName("body")[0].appendChild(scriptTag);
        }
        

   });
   $("#weibsite-information").show("slow");
}

   $(function(){
       if(data.canvas){ //如果在config文件中开启了动态背景
         if(data.defaultCanvas=="touMingDeWangZLiZi"){
            //  //先添加div 节点
            //  let rootDiv=document.getElementById("the");
            //  let db=document.createElement("div");
            //  db.classList.add("particle-network-animation");
            //  rootDiv.appendChild(db);
            //  //添加css
            //  let rootCssTag=document.getElementsByTagName("head")[0];
            //  let cssTag=document.createElement("link");
            //  cssTag.rel="stylesheet";
            //  cssTag.href="css/touMingDeWangZLiZi.css";
            //  cssTag.id="touMingDeWangZLiZi-css";
            //  rootCssTag.appendChild(cssTag);
            //  //添加js
            //  let rootJsTag=document.getElementsByTagName("body")[0];
            //  let scriptTag=document.createElement("script");
            //  scriptTag.src="js/touMingDeWangZLiZi.js";
            //  scriptTag.id="touMingDeWangZLiZi-js";
            //  rootJsTag.appendChild(scriptTag);
            Canvas.openTouMingDeWangZLiZi();
         }
         else if(data.defaultCanvas=="waves"){
           
            // //先添加div节点
            // let rootDiv=document.getElementById("the");
            // let db=document.createElement("div");
            // db.classList.add("stars");
            // rootDiv.appendChild(db);
            // //添加css
            //  let rootCssTag=document.getElementsByTagName("head")[0];
            //  let cssTag=document.createElement("link");
            //  cssTag.id="dusk-css";
            //  cssTag.rel="stylesheet";
            //  cssTag.href="css/dusk.css";
            //  rootCssTag.appendChild(cssTag);
            // //添加js
            // let rootJsTag=document.getElementsByTagName("body")[0];
            // let scriptTag=document.createElement("script");
            // scriptTag.src="js/dusk.js";
            // scriptTag.id="dusk-js";
            // rootJsTag.appendChild(scriptTag);
            Canvas.openDusk();
        }
        else if(data.defaultCanvas=="pointToPoint"){
            // //添加canvas
            // let rootDiv=document.getElementById("the");
            // let db=document.createElement("canvas");
            // db.id="canvas";
            // rootDiv.appendChild(db);
            // //add <link>
            // let rootCssTag=document.getElementsByTagName("head")[0];
            // let cssTag=document.createElement("link");
            // cssTag.id="pointToPoint-css";
            // cssTag.rel="stylesheet";
            // cssTag.href="css/pointToPoint.css";
            // rootCssTag.appendChild(cssTag);
            // //add <script>
            // let rootJsTag=document.getElementsByTagName("body")[0];
            // let scriptTag=document.createElement("script");
            // scriptTag.id="pointToPoint-js";
            // scriptTag.src="js/pointToPoint.js";
            // rootJsTag.appendChild(scriptTag);

            // //pointToPoint是白色主题, so 更改字体和边框颜色
            // $("body").css({
            //     "color":"black",
            // });
            // $("#main-col").css({
            //     "border-left":"1px solid black"
            // });
            Canvas.openPointToPoint();
        }
        else if(data.defaultCanvas=="snow"){
            //min.js
            // let rootJsTag=document.getElementsByTagName("body")[0];
            // let scriptTag=document.createElement("script");
            // scriptTag.src="js/snowflakes.min.js";
            // scriptTag.id="snowmin-js";
            // rootJsTag.appendChild(scriptTag);
            // //snow.js
            // let scriptTag_1=document.createElement("script");
            // scriptTag_1.src="js/snow.js";
            // scriptTag_1.id="snow-js";
            // rootJsTag.appendChild(scriptTag_1);
            Canvas.openSnow();
        }
       }
   });
   $(function(){ //初始化背景
       if(data.backGroundImg){
        $("body").css({
            "background-image":"url("+data.defaultImg+")"
        });
       }
   });

   //获取鼠标焦点到命令行
   $(function(){
    //    $(".command").focus();
       let tip=document.createElement("span");
       tip.id="tip";
       document.getElementsByClassName("inner-content")[0].appendChild(tip);
       var allc="Try typing "+"<span style='color:red'>"+defaultCommands.prefix+defaultCommands.commands[1]+"</span>"+" to get all commands^1500";
       let typed=new Typed("#tip",{
           strings:["^1000Enter your commands on it^1000",allc,"now start!"],
           typeSpeed:30,
           backSpeed:20,
           showCursor:false,
           onComplete:()=>{soSome()}
       });
   });
    function soSome(){
        let span=document.createElement("span");
        span.id="cmd";
        document.getElementsByClassName("command")[0].appendChild(span);
        let type=new Typed("#cmd",{
            strings:["Type in here^500",""],
            typeSpeed:70,
            backSpeed:70,
            showCursor:false,
            onComplete:()=>{focus()}
        });
        
    }
    function focus(){
        $(".command").focus();
        $(".command").innerHTML="";
    }
   //点击页面是否出现小红心
   $(function(){
    if(data.clickLove){
        let script=document.createElement("script");
        script.src="js/clicklove.js";
        script.id="clicklove-js";
        document.getElementsByTagName("body")[0].appendChild(script);
    }
   });
});