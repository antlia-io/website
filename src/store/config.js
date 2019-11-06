/* -- set app title --*/
const AppTitle = 'RNS Solutions';

/* -- set app mode -- */
const AppMode = ['default'];

/* -- set API URLs --*/
const development = 'http://18.221.121.169:4000/api';
const production = 'http://18.221.121.169:4000/api';
const staging = 'http://3.15.22.214:4000/api';



let ApiUrl =''; 
// let ApiSocket =''; 

switch(AppMode[0]){
    case "development":
        ApiUrl = development;
        break;
    case "production":
        ApiUrl = production;
        break;
    case "staging":
        ApiUrl = staging;
        break;
    default:
        ApiUrl = "https://api.rnssol.com/api";
}

export { AppTitle, ApiUrl, AppMode };
