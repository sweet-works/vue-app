
//Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));

function ajaxget(url,obj){
  var pro=new Promise(function(hui){
    var str="";
    var day=new Date();
    for(var i in obj){
      str+=i+"="+obj[i]+"&";
    }
    url+="?"+str.slice(0,-1)+"&t_="+day.getTime();
    console.log(url)
    var ajax=new XMLHttpRequest();
    ajax.open("GET",url);
    ajax.onreadystatechange=function(){
      if(ajax.readyState==4&&ajax.status==200){
        hui(ajax.responseText)
        console.log(ajax.responseText)
      }
    }
    ajax.send(null);
  })
  return pro;
}
ajaxget('123')
