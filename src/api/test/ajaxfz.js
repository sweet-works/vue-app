//ajax POST获取发送方式
function ajaxpost(url,obj){
			var pro=new Promise(function(hui){
			var str="";
			for(var i in obj){
				str+=i+"="+obj[i]+"&";
			}
			str=str.slice(0,-1);
			console.log(str);
			var ajax=new XMLHttpRequest();
			ajax.open("POST",url);
			ajax.onreadystatechange=function(){
				if(ajax.readyState==4&&ajax.status==200){
					hui(ajax.responseText);
				}
			}
			ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			ajax.send(str);
		})
			return pro;
	}
//ajax GET获取发送方式
function ajaxget(url,obj){
	var pro=new Promise(function(hui){
			var str="";
			var day=new Date();
			for(var i in obj){
				str+=i+"="+obj[i]+"&";
			}
			str=str.slice(0,-1);
			str="?"+str+"&t_="+day.getTime();
			url+=str;
			var ajax=new XMLHttpRequest();
			ajax.open("GET",url);
			ajax.onreadystatechange=function(){
				if(ajax.readyState==4&&ajax.status==200){
					hui(ajax.responseText)
				}
			}
				ajax.send(null);
		})
			return pro;
	}
	ajaxget("http://localhost:4000/index_category").then(res=>console.log(res))
