var Article={
    getAllArticle:function(){
        var strings="";
        for(let i=0;i<article.length;i++){
            strings+="<span class='art-title'>"+article[i].articleName+"</span>"+" ["+article[i].articleDate+"]"+
            " ["+article[i].articleTag+"]"+"<br>"
        }
        return strings;
    },
    getSomeArticle:function(aticName_string){
        var artString="";
        console.log(aticName_string+"--"+aticName_string.length);
        for(let i=0;i<article.length;i++){
            if(aticName_string==article[i].articleName){
                artString="<h5>"+article[i].articleName+"<h5>"+
                "<span style='font-size:15px'><span class='fa fa-calendar-plus-o'></span> "+article[i].articleDate+" "+" | "+" "+"<span class='fa fa-files-o'></span> "+article[i].articleTag+"<br><br>"+
                article[i].content+"</span>";
                return artString;
            }
        }
        return -1;
    },
    articleChilds:function(rootTagClassName_string,articleSite_int){
        let rootTag=document.getElementsByClassName(rootTagClassName_string)[0];
        
    }
    
}

var Friends={
  getAllFriends:function(){
      var friStr="";
      for(let i=0;i<data.friends.length;i++){
         friStr+="<span><h5><a href="+data.friendsURL[i]+">"+data.friends[i]+"</a></h5></span>"+
         "<span>"+data.friendDescribe[i]+"</span><br><br>"
      }
      return friStr;
  }
}

var Tag={
    tagCount:0,
    getTagObj:function(){
        // this.addJqloudChild();
        return this.getJsonObj();
    },
    addJqloudChild:function(){
        var rootTag=document.getElementsByTagName("head")[0];
        var newLinkTag=document.createElement("link");
        newLinkTag.rel="stylesheet";
        newLinkTag.href="css/JqCloud.css";
        newScriptTag=document.createElement("script");
        newScriptTag.src="js/JqCloud.js";
        rootTag.appendChild(newLinkTag);
        rootTag.appendChild(newScriptTag);
    },
    getWeight:function(tagNameStr){
    var postCount=1;
     
    for(var postLenght=0;postLenght<article.length;postLenght++){
          
        if(article[postLenght].articleTag==tagNameStr)   postCount++;
          
    }
    return postCount;
    },
    getJsonObj:function(){
        var wordStr="[";
     for(var xx=0;xx<article.length;xx++){
         if(this.isAddTag(article[xx].articleTag,xx)){
         wordStr+="{"+"\""+"id"+"\""+":"+"\""+article[xx].articleTag+"\""+","+"\""+"groupid"+"\""+":"+"\""+this.getPercent(article[xx].articleTag)+"%"+
         "\""+","+"\""+"size"+"\""+":"+this.getSize(article[xx].articleTag)+"},";
         this.tagCount++; //标签数量
        }
     }
     wordStr=wordStr.substring(0,wordStr.length-1);
     wordStr+="]";
     console.log(wordStr);
     return JSON.parse(wordStr);
    },
    isAddTag:function(articleTagName,site){
        if(site==0) return true;
        else{
            for(let i=site;i>0;i--){
                if(articleTagName==article[i-1].articleTag) return false;
            }
        }
        return true;
    },
    //这个方法返回Tag占所有标枪的百分比*100
    getPercent:function(tagName){
        var thePerc=0;
        var tagc=0;
        for(let i=0;i<article.length;i++){
            if(article[i].articleTag==tagName){
                tagc++;
            }
        }
        console.log(tagc/article.length*100);
        return tagc/article.length*100;
    },
    //这个方法来放回绘制圆形的大小
    getSize:function(tagName){
        var size=900;
        size=this.getPercent(tagName)*20>900?900:this.getPercent(tagName)*20;
        return Number.parseInt(size);
    }
}

var About={
    getAboutMe:function(){
        if(data.aboutMe==""||data.aboutMe==undefined){
            return "This guy is too lazy to write anything down.";
        }
        else{
            return "<span>"+data.aboutMe+"</span>";
        }
    },
    getAboutSkill(){
        var skillString="";
        if(data.aboutMyskill.length<1){
            return "This guy is too lazy. It's empty here!"
        }
        else
        for(let i=0;i<data.aboutMyskill.length;i++){
            skillString+="<div>"+data.aboutMyskill[i]+" ["+data.skillPercent[i]+"%]"+"</div>"+
            "<div class='skill-percent'>"+this.getHowManyPerChar(".inner-content",i)+"</div>";
        }
        return skillString;
    },
    //判断要输入几个'|'
    getHowManyPerChar:function(eleMents,site_int){
        var perChar="";
        var theWidth=$(eleMents).width()/2;
        theWidth=theWidth*(data.skillPercent[site_int]/100);
        theWidth=theWidth/8-2;
        for(let i=0;i<theWidth;i++){
            perChar+="| ";
        }
       
        return perChar;
    },
    addAboutPhotoAlnum:function(){ //预加相册,节点加之
        // var phStr="";
        // if(data.aboutMyPhotoAlbum.length<1){
        //     return "This guy is too lazy. It's empty here!";
        // }
        // else
        // for(let i=0;i<data.aboutMyPhotoAlbum.length;i++){
        //     phStr+="<img src="+data.aboutMyPhotoAlbum[i]+">";
        // }
        // return phStr;
        var rootPatag=document.getElementsByClassName("inner-content")[0];
         for(let i=0;i<data.aboutMyPhotoAlbum.length;i++){
             var faDiv=document.createElement("div");
             faDiv.classList.add("col-md-4","col-sm-6","pa-float");
             var pa_paDiv=document.createElement("div");
             pa_paDiv.classList.add("pa-box");
             var img=document.createElement("img");
             img.src=data.aboutMyPhotoAlbum[i];
             img.alt=data.photoDescribe[i];
             var desDiv=document.createElement("div");
             desDiv.classList.add("pa-box-content");
             var span=document.createElement("span");
             span.classList.add("pa-post");
             var spanText=document.createTextNode(data.photoDescribe[i]);
             //now will add childs
             span.appendChild(spanText);
             desDiv.appendChild(span);
             pa_paDiv.appendChild(img);
             pa_paDiv.appendChild(desDiv);
             faDiv.appendChild(pa_paDiv);
             rootPatag.appendChild(faDiv);
         }

    }
}
var Pigeonhole={
 getPige:function(){
     return "You can choose to perfect it yourself";
 }
}

var Music={
    openPlayer:function(){ //在左下角开启一个播放器
        if(document.getElementById("a-player")==undefined||document.getElementById("a-player")==null){
            //添加播放器节点
          let player=document.createElement("div");
          player.id="a-player";
          document.getElementById("the").appendChild(player);
        }
        const ap=new APlayer({
            container:document.getElementById("a-player"),
            fixed:true,
            theme:data.theme,
            volume:data.volume,
            loop:data.loop,
            autoPlay:data.autoPlay,
            audio:data.music,
        });
        this.openMusicBg();
    },
    openMusicBg:function(){
        var rootTag=document.getElementsByClassName("container")[0];
        if(data.defaultBg=="paintGirl"){
           let d1=document.createElement("div");
           d1.id="background";
           d1.classList.add("wall");
           let d2=document.createElement("div");
           d2.id="midground";
           d2.classList.add("wall");
           let d3=document.createElement("div");
           d3.id="foreground";
           d3.classList.add("wall");
           let d4=document.createElement("div");
           d4.id="top";
           d4.classList.add("wall");
           rootTag.appendChild(d1);
           rootTag.appendChild(d2);
           rootTag.appendChild(d3);
           rootTag.appendChild(d4);
        }
        else if(data.defaultBg=="lizi"){
            //add lizi tag
            let theTag=document.getElementById("the");
            let liziTag=document.createElement("div");
            liziTag.id="jsi-particle-container";
            liziTag.classList.add("lizi");
            theTag.appendChild(liziTag);
            //add script
            let bodyTag=document.getElementsByTagName("body")[0];
            let scriptTag=document.createElement("script");
            scriptTag.id="lizi-script"
            scriptTag.src="js/lizi.js";
            bodyTag.appendChild(scriptTag);
        }

    },
    closeMusicBg:function(){
        //首先判断开启了哪个背景
         if(data.defaultBg=="lizi"){
             if(document.getElementById("jsi-particle-container")!=null||document.getElementById("jsi-particle-container")!=undefined){
             let theTag=document.getElementById("the");
             theTag.removeChild(document.getElementById("jsi-particle-container"));
             let body=document.getElementsByTagName("body")[0];
             body.removeChild(document.getElementById("lizi-script"));
             }
             else{
                 return -1;
             }
         }
         else if(data.defaultBg=="paintGirl"){
            if(document.getElementById("background")==null||document.getElementById("background")==undefined){
                return -1;
            }
            var rootTag=document.getElementsByClassName("container")[0];
            // console.log(document.getElementsByClassName("wall").length);
            rootTag.removeChild(document.getElementById("background"));
            rootTag.removeChild(document.getElementById("midground"));
            rootTag.removeChild(document.getElementById("foreground"));
            rootTag.removeChild(document.getElementById("top"));
         }
        //移除div节点
        //移除script节点
    },
    closePlayer:function(){
        if(document.getElementById("a-player")==null||document.getElementById("a-player")==undefined){
            return -1;
        }
        document.getElementById("the").removeChild(document.getElementById("a-player"));
        this.closeMusicBg();
    },
    changeMusicBg:function(bgName){
        
        for(let i=0;i<data.defaultBgList.length;i++){
            if(bgName==data.defaultBgList[i]){
               //首先关闭已开启的音乐和背景
                this.closeMusicBg();
                this.closePlayer();
                data.defaultBg=bgName;
                this.openPlayer();
                return 1;
            }
        }
        return -1;
    },
    getAllMusicBglist:function(){
        var muscStr="";
        for(let i=0;i<data.defaultBgList.length;i++){
            muscStr+="[ "+data.defaultBgList[i]+" ]"+"<br>";
            
        }
        return muscStr;
        
    },
    getAllMusicList:function(){
        var mlist="";
        if(data.music.length==0) return "He doesn't seem to have a music!";
        for(let i=0;i<data.music.length;i++){
            mlist+=data.music[i].name+"————"+data.music[i].artist+"<br>";
        }
        return mlist;
    }
}

Tip={
    tipMessage:function(innerTagStr,message){
        
         if(document.getElementById(innerTagStr)!=null||document.getElementById(innerTagStr)!=undefined){
             document.getElementById(innerTagStr).innerHTML=message;
         }  
         else{
             document.getElementsByClassName(innerTagStr)[0].innerHTML=message;
         } 
    }
}
//背景图片
BackgroundImg={
  openBgImg:function(){
    if(data.backGroundImg){
        //默认背景一开启时
        return -1;
    }
    else{
        data.backGroundImg=true;
        //通过config的默认背景属性开启
        this.openBgImgByName(data.defaultImg);

    }
  },
  closeBgImg:function(){
      if(!data.backGroundImg){
          return -1;
      }
      else{
          data.backGroundImg=false;
      $("body").css({
          "background-image":"url(??.jpg)"
      });
    }
  },
  openBgImgByName:function(imgUrl){
    
    for(let i=0;i<data.backgroundImgs.length;i++){
        if(imgUrl==data.backgroundImgs[i]){
            $("body").css({
                "background-image":"url("+imgUrl+")"
            });
            data.backGroundImg=true;
            return;
        }
    }
   return -1;
  },
  getAllBgList:function(){
     
      var bglist="";
      if(data.backgroundImgs.length==0){
          return "<span style='color:red'>Nothing in the background library!</span>";
      }
      else{
      for(let i=0;i<data.backgroundImgs.length;i++){
          bglist+="[ "+data.backgroundImgs[i]+" ]"+"<br>";
      }
    }
    
      return bglist;
  }
}

//颜色
Color={
    setFontColor:function(color){
        $("body").css({
            "color":color
        });
        
    },
    setBgColor:function(color){
        $("body").css({
            "background-color":color
        });
    }
}



Canvas={
    openDynamicBackground:function(){
        if(data.canvas){//动态背景被默认开启时
            return -1;
        }
        else{
            data.canvas=true;
            //利用config的默认背景直接调用openWith...即可
            this.openDynamickBgWithName(data.defaultCanvas);
        }
    },
    closeDynamicBackground:function(){ //关闭动态背景
        if(data.canvas){
        data.canvas=false;
        this.removeDynamicBgChild();
        //当切换白色主题时，字体被改成了黑色,现在改回来
        $("body").css({
            "color":"white",
        });
        $("#main-col").css({
            "border-left":"1px solid white"
        });
        }
        else{
            return -1;
        }
    },
    // changeDynamicBackground:function(){ //改变动态背景

    // },
    openDynamickBgWithName:function(dbName){ //通过背景名字改变背景
        if(dbName=="snow"){
            data.canvas=true;
            //不管怎样,先看有没有节点,有则移除
            this.removeDynamicBgChild();
            //其次打开动态背景
            this.openSnow();
        }
        else if(dbName=="waves"){
            data.canvas=true;
            this.removeDynamicBgChild();
            this.openDusk();
        }
        else if(dbName=="pointToPoint"){
            data.canvas=true;
            this.removeDynamicBgChild();
            this.openPointToPoint();
        }
        else if(dbName=="touMingDeWangZLiZi"){
            data.canvas=true;
            this.removeDynamicBgChild();
            this.openTouMingDeWangZLiZi();
        }
        else{
            return -1;  //没有则提示
        }
    },
    removeDynamicBgChild:function(){ //移除背景节点
       
        var rootScriptTag=document.getElementsByTagName("body")[0];
        var rootDivTag=document.getElementById("the");
        var rootCssTag=document.getElementsByTagName("head")[0];
         //Snow
        if(document.getElementById("snow-js")!=null||document.getElementById("snow-js")!=undefined){
           rootScriptTag.removeChild(document.getElementById("snow-js"));
           rootScriptTag.removeChild(document.getElementById("snowmin-js"));
        }
        //pointToPoint
        else if(document.getElementById("canvas")!=null||document.getElementById("canvas")!=undefined){
            //移除canvas
            rootDivTag.removeChild(document.getElementById("canvas"));
            //移除js
            rootScriptTag.removeChild(document.getElementById("pointToPoint-js"));
            //移除css
            rootCssTag.removeChild(document.getElementById("pointToPoint-css"));

        }
        //dusk
        else if(document.getElementById("dusk-css")!=null||document.getElementById("dusk-css")!=undefined){
            //移除div
            rootDivTag.removeChild(document.getElementsByClassName("waves")[0]);
            //移除js
            rootScriptTag.removeChild(document.getElementById("dusk-js"));
            //移除css
            rootCssTag.removeChild(document.getElementById("dusk-css"));
        }
        //touMingDeLizi
        else  if(document.getElementById("touMingDeWangZLiZi-css")!=null||document.getElementById("touMingDeWangZLiZi-css")!=undefined){
            //移除div
            rootDivTag.removeChild(document.getElementsByClassName("particle-network-animation")[0]);
            //移除js
            rootScriptTag.removeChild(document.getElementById("touMingDeWangZLiZi-js"));
            //移除css
            rootCssTag.removeChild(document.getElementById("touMingDeWangZLiZi-css"));
        }
    },
    openSnow:function(){
         //min.js
         let rootJsTag=document.getElementsByTagName("body")[0];
         let scriptTag=document.createElement("script");
         scriptTag.src="js/snowflakes.min.js";
         scriptTag.id="snowmin-js";
         rootJsTag.appendChild(scriptTag);
         //snow.js
         console.log(document.getElementById("snowmin-js").src);
         let scriptTag_1=document.createElement("script");
         scriptTag_1.src="js/snow.js";
         scriptTag_1.id="snow-js";
         rootJsTag.appendChild(scriptTag_1);
    },
    openPointToPoint:function(){
        //添加canvas
        let rootDiv=document.getElementById("the");
        let db=document.createElement("canvas");
        db.id="canvas";
        rootDiv.appendChild(db);
        //add <link>
        let rootCssTag=document.getElementsByTagName("head")[0];
        let cssTag=document.createElement("link");
        cssTag.id="pointToPoint-css";
        cssTag.rel="stylesheet";
        cssTag.href="css/pointToPoint.css";
        rootCssTag.appendChild(cssTag);
        //add <script>
        let rootJsTag=document.getElementsByTagName("body")[0];
        let scriptTag=document.createElement("script");
        scriptTag.id="pointToPoint-js";
        scriptTag.src="js/pointToPoint.js";
        rootJsTag.appendChild(scriptTag);

        //pointToPoint是白色主题, so 更改字体和边框颜色
        $("body").css({
            "color":"black",
        });
        $("#main-col").css({
            "border-left":"1px solid black"
        });
    },
    openDusk:function(){
        //先添加div节点
        let rootDiv=document.getElementById("the");
        let db=document.createElement("div");
        db.classList.add("waves");
        rootDiv.appendChild(db);
        //添加css
         let rootCssTag=document.getElementsByTagName("head")[0];
         let cssTag=document.createElement("link");
         cssTag.id="dusk-css";
         cssTag.rel="stylesheet";
         cssTag.href="css/wavas.css";
         rootCssTag.appendChild(cssTag);
        //添加js
        let rootJsTag=document.getElementsByTagName("body")[0];
        let scriptTag=document.createElement("script");
        scriptTag.src="js/wavas.js";
        scriptTag.id="dusk-js";
        rootJsTag.appendChild(scriptTag);
    },
    openTouMingDeWangZLiZi:function(){
        //先添加div 节点
        let rootDiv=document.getElementById("the");
        let db=document.createElement("div");
        db.classList.add("particle-network-animation");
        rootDiv.appendChild(db);
        //添加css
        let rootCssTag=document.getElementsByTagName("head")[0];
        let cssTag=document.createElement("link");
        cssTag.rel="stylesheet";
        cssTag.href="css/touMingDeWangZLiZi.css";
        cssTag.id="touMingDeWangZLiZi-css";
        rootCssTag.appendChild(cssTag);
        //添加js
        let rootJsTag=document.getElementsByTagName("body")[0];
        let scriptTag=document.createElement("script");
        scriptTag.src="js/touMingDeWangZLiZi.js";
        scriptTag.id="touMingDeWangZLiZi-js";
        rootJsTag.appendChild(scriptTag);
    },
    getAllDynamicBgList:function(){
        return "[ dusk ]"+"<br>"+"[ pointToPoint ]<br>"+"[ touMingDeWangZLiZi ]<br>"+"[ snow ]";
    }
    
}

BuSuangZi={
    
}
