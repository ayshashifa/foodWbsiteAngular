export const AppConstants = {
  SERVER_CONFIG: {
    // DEVELOPMENT: 'https://tnchampions.proz.in',
    // LIVE: 'https://tnchampions1.sdat.in',
    LIVE: 'http://localhost:8000',
  },
};
// export function backendUrl() {
//   return AppConstants.SERVER_CONFIG.LIVE;
// }
// function createUrl(urlName: string) {
//   return backendUrl() + urlName;
// }
function createUrl(urlName:string){
  return AppConstants.SERVER_CONFIG.LIVE+urlName;

}
export const appApiResources = {
  //  getexpenditurelist:createUrl('/aysha/tabledetails')
  getexpenditurelist: createUrl('/files'),
  postimage: createUrl('/upload'),
  getmoreNews: createUrl('/food/news/short'),
  getnewsId: createUrl('/food/news/'),
  postcomment : createUrl('/food/news/comments'),
  getShopList:createUrl('/food/shop/list'),
  postShopItems:createUrl('/food/shop/list'),//
  getSingleShopList:createUrl('/food/shop/'),
  getcontactUs:createUrl('/food/contactUs'),//
  postContactUs:createUrl('/food/contactUs'),
  signUp:createUrl('/signup'),
  login:createUrl('/login'),
  otpVerify:createUrl('/verifyOtp'),
  getUserDetail:createUrl('/getUserDetail'),
  getUserData:createUrl( '/userdata'),
};
