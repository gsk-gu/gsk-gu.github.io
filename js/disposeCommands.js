/**
 * 处理命令
 */

$(document).ready(function(){
    var innerContentTag=document.getElementsByClassName("inner-content")[0];
    var endAllCommand="";
    var eventTag=document.getElementsByClassName("command")[0];
    var useCommand="";
    eventTag.onkeydown=function(){
      var thisAllCommand="";
      var removeBrCommand="";
      var event=window.event;
    //   console.log(event.keyCode);
     
      if(event&&event.keyCode==13){//按下回车事件
         thisAllCommand=eventTag.innerText;
        //去除换行符
        for(let i=0; i<thisAllCommand.length;i++){
           if(thisAllCommand[i]!="\n") removeBrCommand+=thisAllCommand[i];
        }
    
        if(removeBrCommand!=""&&removeBrCommand!=endAllCommand){
            useCommand=removeBrCommand.substring(endAllCommand.length,removeBrCommand.length);
            cmd(useCommand);
            endAllCommand=removeBrCommand;
            removeBrCommand="";
        }
      }
  }
  function innerPrefix(){
     
  }
  function cmd(command){
      
      let map=getMap(command);
      if(map==-1){
          innerSyntaxError();
      }
      else{
      switch(map){
        case 0:
            clearSyntaxError();
            clearInnerContent();
            innerContentTag.innerHTML="ERROR";
            break;
        case 1: 
          clearSyntaxError();
            clearInnerContent();
            getTyped(".inner-content",getAllCommands());
            break;
        case 2: //获取所有Aritile
          clearSyntaxError();
          clearInnerContent();    
          getTyped(".inner-content",Article.getAllArticle());
          break;
        case 3://按指定博客名获取博客
          clearSyntaxError();
          clearInnerContent();
          if(Article.getSomeArticle(command.substring(defaultCommands.commands[map].length,command.length))==-1){ //切取名字
            innerSyntaxError();
          }
          else{
            $(".inner-content").html(Article.getSomeArticle(command.substring(defaultCommands.commands[map].length,command.length)));
          }
          // getTyped(".inner-content",Article.getSomeArticle(command.substring(defaultCommands.commands[map].length,command.length)));
          break;
        case 4://朋友
          clearSyntaxError();
          clearInnerContent();
          getTyped(".inner-content",Friends.getAllFriends());
          break;
        case 5://关于我
          clearSyntaxError();
          clearInnerContent();
          getSpeedTyped(".inner-content",About.getAboutMe(),data.aboutTypeSpeed);
          break;
        case 6://关于技能
          clearSyntaxError();
          clearInnerContent();
          getSpeedTyped(".inner-content",About.getAboutSkill(),data.aboutTypeSpeed);
          break;
        case 7: //关于相册
          clearSyntaxError();
          clearInnerContent();
          // getSpeedTyped(".inner-content",About.getAboutPhotoAlnum(),data.aboutTypeSpeed);
          About.addAboutPhotoAlnum();
         break;
        case 8: //标签
        clearInnerContent();
        clearInnerContent();
        myBubbleChart(".inner-content",Tag.getJsonObj()); //在tagscra.js中的方法
        // tagGo("inner-content",Tag.getJsonObj());
        break;
        case 9: //归档
        clearSyntaxError();
        clearInnerContent();
        Pigeonhole.getPige();   
        break;
        case 10://开启音乐播放器
        clearSyntaxError();
        clearInnerContent();
        let tip="The background animation is turned on by default,and you can turn it off with"+"\""+defaultCommands.prefix+
        " "+defaultCommands.commands[13]+"\""+" "+"close background or change it with "+"\""+defaultCommands.prefix+" "+defaultCommands.commands[14]+"\"";
        Music.openPlayer();
        getTyped(".inner-content",tip);
        break;
        case 11://关闭音乐播放器
          if(Music.closePlayer()==-1){
            clearSyntaxError();
            clearInnerContent();
            getTyped(".inner-content","<span style='color:red'>Invalid command,player never turned on</span>")
          }
          break;
        case 12://打开音乐背景
        Music.openMusicBg();
        break;
        case 13://关闭音乐背景
        if(Music.closeMusicBg()==-1){
          clearSyntaxError();
          clearInnerContent();
         getTyped(".inner-content","<span style='color:red'>Invalid command,music background never turned on!</span>");
        }

        break;
        case 14://改变音乐背景
         if(Music.changeMusicBg(command.substring(defaultCommands.commands[map].length,command.length))==-1){
          clearSyntaxError();
          clearInnerContent();
          let tip="The background doed not exist.Try re-typing or try typing <span style='color:lightskyblue'>"+defaultCommands.prefix+defaultCommands.commands[15]+"</span> to get some information!";
          getTyped(".inner-content",tip);
         }
         break;
         case 15://获取音乐背景列表
           clearSyntaxError();
           clearInnerContent();
           getTyped(".inner-content",Music.getAllMusicBglist());
           break;
          case 16:
            clearSyntaxError();
            clearInnerContent();
            getTyped(".inner-content",Music.getAllMusicList());
            break;
         case 17: //Clear
           document.getElementsByClassName("command")[0].innerHTML="";
           endAllCommand="";
           useCommand="";
          break;
          case 18: //打开动态背景
          if(Canvas.openDynamicBackground()==-1){
            let tip="<span style='color:red'>The background is already turned on. There is no need to turn on the background again!</span>";
            clearSyntaxError();
            clearInnerContent();
            getTyped(".inner-content",tip);

          }
          break;
          case 19://关闭动态背景
         if(Canvas.closeDynamicBackground()==-1){
           clearSyntaxError();
           clearInnerContent();
           getTyped(".inner-content","<span style='color:red'>The dynamic background is never turned on!</span>");
         }
          break;
         case 20://通过动态背景名打开
         if(Canvas.openDynamickBgWithName(command.substring(defaultCommands.commands[map].length,command.length))==-1){
           clearSyntaxError();
           clearInnerContent();
           getTyped(".inner-content","<span style='color:red'>The dynamic background name you entered does not exist!<span>");
         }
         break;
         case 21://获取动态背景list
         clearSyntaxError();
         clearInnerContent();
         getTyped(".inner-content",Canvas.getAllDynamicBgList());
         break;
         case 22: //打开背景
           if(BackgroundImg.openBgImg()==-1){
             clearSyntaxError();
             clearInnerContent();
             getTyped(".inner-content","<span style='color:red'>The background is already turned on. There is no need to turn it on again!</span>")
           }
          break;
         case 23: //关闭背景
          if(BackgroundImg.closeBgImg()==-1){
            clearSyntaxError();
            clearInnerContent();
            getTyped(".inner-content","<span style='color:red'>The background never opens!</span>")
          }
          break;
         case 24: //open bg by bgnameUrl
         if(BackgroundImg.openBgImgByName(command.substring(defaultCommands.commands[map].length,command.length))==-1){
           clearSyntaxError();
           clearInnerContent();
           getTyped(".inner-content","<span style='color:red'>The background doesn't exist!</span>");
         }
         break;
         case 25: //get bgimg list
         console.log("here");
         clearSyntaxError();
         clearInnerContent();
         getTyped(".inner-content",BackgroundImg.getAllBgList());
         break;

         case 26: //设置背景颜色
         Color.setBgColor(command.substring(defaultCommands.commands[map].length,command.length));
         break;

         case 27: //设置字体颜色
        
         Color.setFontColor(command.substring(defaultCommands.commands[map].length,command.length));
         break;
        // case 28:
          
        //  if(document.getElementById("clicklove-js")!=null||document.getElementById("clicklove-js")!=undefined){
        //    let root=document.getElementsByTagName("body")[0];
        //    let scriptTag=document.getElementById("clicklove-js");
        //    root.removeChild(scriptTag);
        //  }
        //  else{
        //    clearSyntaxError();
        //    clearInnerContent();
        //    getTyped(".inner-content","<span style='red'>Click love never open!</span>");
        //  }
        //  break;

         case 28:
           if(document.getElementById("clicklove-js")==null||document.getElementById("clicklove-js")==undefined){
             let scriptTag=document.createElement("script");
             scriptTag.src="js/clicklove.js";
             scriptTag.id="clicklove-js";
             document.getElementsByTagName("body")[0].appendChild(scriptTag);
           }
           else{
             clearSyntaxError();
             clearInnerContent();
             getTyped(".inner-content","<span style='color:red'>Click love already opened!</span>");
           }
         
      }
    }
  }
  //返回命令所在的映射
  function getMap(command){
      
      for(let i=0;i<defaultCommands.commands.length;i++){
          if(defaultCommands.prefix+defaultCommands.commands[i]==command){
              return i;
          }
          else if(command.indexOf(defaultCommands.commands[i].substring(0,defaultCommands.commands[i].length-1))>-1){
            // console.log(command);
            // console.log(defaultCommands.commands[i].substring(0,defaultCommands.commands[i].length-1));
            // console.log(command.substring(defaultCommands.commands[i].length,command.length));
            return i;

          }
         
      }
      return -1;
  }
   //命令错误提示
  function innerSyntaxError(){
      clearInnerContent(); //放置内容前先清除
      let randomNum1=Number.parseInt(Math.random()*defaultCommands.commands.length);
      let randomNum2=Number.parseInt(Math.random()*defaultCommands.commands.length);
      let randomNum3=Number.parseInt(Math.random()*defaultCommands.commands.length);
      while(randomNum1==randomNum2||randomNum1==randomNum3||randomNum2==randomNum3){
         randomNum1=Number.parseInt(Math.random()*defaultCommands.commands.length);
         randomNum2=Number.parseInt(Math.random()*defaultCommands.commands.length);
         randomNum3=Number.parseInt(Math.random()*defaultCommands.commands.length);
      }


      if(document.getElementById("syntax-error")==undefined){
      let synSpan=document.createElement("span");
      synSpan.id="syntax-error";
       innerContentTag.appendChild(synSpan);
      var typed=new Typed("#syntax-error",{
        strings:["<span style='color:red;'>Syntax error or command does not exist."+
        "<br>You can try:<br>"+
        defaultCommands.prefix+defaultCommands.commands[randomNum1]+"-----"+defaultCommands.commandENExplain[randomNum1]+"<br>"+
        defaultCommands.prefix+defaultCommands.commands[randomNum2]+"-----"+defaultCommands.commandENExplain[randomNum2]+"<br>"+
        defaultCommands.prefix+defaultCommands.commands[randomNum3]+"-----"+defaultCommands.commandENExplain[randomNum3]+"<br>"+
        "</span>"],
        typeSpeed:5,
        showCursor:false
      });}
      else{
        clearSyntaxError();
        var typed=new Typed("#syntax-error",{
          strings:["<span style='color:red;'>Syntax error or command does not exist."+
          "<br>You can try:<br>"+
          defaultCommands.prefix+defaultCommands.commands[randomNum1]+"-----"+defaultCommands.commandENExplain[randomNum1]+"<br>"+
          defaultCommands.prefix+defaultCommands.commands[randomNum2]+"-----"+defaultCommands.commandENExplain[randomNum2]+"<br>"+
          defaultCommands.prefix+defaultCommands.commands[randomNum3]+"-----"+defaultCommands.commandENExplain[randomNum3]+"<br>"+
          "</span>"],
          typeSpeed:5,
          showCursor:false
        });
      }
  
}


//一个Typed
function getTyped(strTag,strings){
 var typed=new Typed(strTag,{
   strings:[strings],
   typeSpeed:5,
   showCursor:false
 });
}
//一个自定义速度的Typed
function getSpeedTyped(strTag,strings,speed){
  var typed=new Typed(strTag,{
    strings:[strings],
    typeSpedd:speed,
    showCursor:false
  });
}
  //重置语法提示图层
  function clearSyntaxError(){
   
     if(document.getElementById("syntax-error")!=undefined){
       document.getElementById("syntax-error").innerHTML="";
     }
      
  }
  //重置innerContent图层 
  function clearInnerContent(){
      innerContentTag.innerHTML="";
  }
  //获取所有命令
  function getAllCommands(){
    var strings="";
    for(let i=0;i<defaultCommands.commands.length;i++){
      strings+=defaultCommands.prefix+defaultCommands.commands[i]+"-----"+defaultCommands.commandENExplain[i]+"<br>";
    }

    return strings;
  }
//或许在浏览器大小改变时有一定机率要重新绘制skill百分比
  onresize=function(){
    if(useCommand==defaultCommands.prefix+defaultCommands.commands[6]){
      clearSyntaxError();
      clearInnerContent();
      getSpeedTyped(".inner-content",About.getAboutSkill(),data.aboutTypeSpeed);
    }
  }
});