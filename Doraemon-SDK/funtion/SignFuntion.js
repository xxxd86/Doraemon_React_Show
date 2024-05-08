import native from '../native';
function SignFuntion(signType, params, message) {
  native.HostModule.signAuto(signType, params, callback => {
    if (callback) {
      //签到完成信息，以及失败信息，json格式
      let res = JSON.parse(callback);
      message(res);
    }
  });
}
export default {
  SignFuntion
}