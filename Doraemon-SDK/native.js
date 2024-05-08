//引入HostModule
import {NativeModules} from 'react-native';
const {HostModule, SignModule, AmapModule, GPTModule} = NativeModules;
export default {
  HostModule,
  SignModule,
  AmapModule,
  GPTModule
}