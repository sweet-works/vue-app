
//所有接口文档请求的方法
import ajax from './ajax'
// 1、根据经纬度获取位置详情<br/>
//http://localhost:4000
//代理跨域标识
const API='/api'
export const reqAddress=(geohash)=>ajax(`${API}/position/${geohash}`);
// 2、获取食品分类列表<br/>
export const reqFood=()=>{
    return ajax(`${API}/index_category`)
};
// 3、根据经纬度获取商铺列表<br/>
export const reqShops=({latitude,longitude})=> ajax(`${API}/shops`,{latitude,longitude});
// 4、根据经纬度和关键字搜索商铺列表<br/>
export const reqSearch=({keyword,geohash})=> ajax(`${API}/search_shops`,{keyword,geohash})
// 5、获取一次性验证码<br/>
export const reqCaptcha=()=>ajax(`${API}/captcha`);
// 6、用户名密码登陆<br/>
export const reqPwd=({name,pwd,captcha})=>ajax(`${API}/login_pwd`,{name,pwd,captcha},'POST');
// 7、发送短信验证码<br/>
export const reqSendcode=(phone)=>ajax(`${API}/sendcode`,{phone});
// 8、手机号验证码登陆<br/>
export const reqLogin_sms=({phone,code})=>ajax(`${API}/login_sms`,{phone,code},'POST');
// 9、根据会话获取用户信息<br/>
export const reqUserinfo=()=>ajax(`${API}/userinfo`);
// 10、用户登出<br/>
export const reqLogout=()=>ajax(`${API}/logout`);
