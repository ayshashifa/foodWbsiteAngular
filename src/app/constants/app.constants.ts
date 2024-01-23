export const AppConstants = {
  SERVER_CONFIG: {
    // DEVELOPMENT: 'https://tnchampions.proz.in',
    // LIVE: 'https://tnchampions1.sdat.in',
    LIVE: 'http://localhost:8000',
  },
};
export function backendUrl() {
  return AppConstants.SERVER_CONFIG.LIVE;
}
function createUrl(urlName: string) {
  return backendUrl() + urlName;
}

export const appApiResources = {
  //  getexpenditurelist:createUrl('/aysha/tabledetails')
  getexpenditurelist: createUrl('/files'),
  postimage: createUrl('/upload'),
  getmoreNews: createUrl('/food/news/short'),
  getnewsId: createUrl('/food/news/'),
};
