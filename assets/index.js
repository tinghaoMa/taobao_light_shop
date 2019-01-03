const riderImages = () => {
  let riderArr = [];

  for (let i = 0; i < 36; i++) {
    if (i < 10) {
      const index = `0${i}`;
      riderArr.push(
        `https://g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/riderDirection${index}.png`
      );
    } else {
      riderArr.push(
        `https://g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/riderDirection${i}.png`
      );
    }
  }
  return riderArr;
};

const riderImg = riderImages();

export default {
  riderImg,
  errorNoGps: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/loc-112-112.svg',
  errorNoStore: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/store-112-112.svg',
  indexBg: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/index-bg-1125-840.png',
  indexIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/index-icon-78-78.png',
  indexGiftIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/index-gift-icon-90-90.png',
  indexTmIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/index-tm-icon-90-90.png',
  addIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/add-22-22.svg',
  timeLineIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/rightIcon-4-16.webp',
  indexStar1: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/index-star1-93-96.png',
  indexStar2: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/index-star2-72-72.png',
  indexLocation: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/index-location-36-42.png',
  cutIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/cut-22-22.svg',
  starbucksMan: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/starbuck-man-52-77.svg',
  locationIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/locationIcon-8-10.svg',
  takeoutIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/takeoutIcon-21-24.svg',
  greenStar: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/green-star-18-17.svg',
  indexArrow: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/index-arrow-21-33.png',
  radioChecked: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/radio-checked-14-14.svg',
  consultIco: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/consult-11-12.webp',
  electronic: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/eletronicInvoice-10-10.webp',
  right: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/right-5-7.svg',
  service: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/service-12-12.webp',
  maskInOrderAdvance: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/mask-654-240.webp',
  orderAdvanceIcon: '//gw.alicdn.com/tfs/TB1lD9Ev9zqK1RjSZFpXXakSXXa-32-32.png',
  orderCurrentAdvance: '//gw.alicdn.com/tfs/TB1iZEawMHqK1RjSZFEXXcGMXXa-32-32.png',
  orderPreAdvance: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/order-pre-advance-17-17.webp',
  star: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/star-108-108.png',
  searchIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/search-42-42.webp',
  searchIconOnTop: '//gw.alicdn.com/tfs/TB1kQSLxkPoK1RjSZKbXXX1IXXa-48-48.png',
  indexGood: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/index-good-60-60.png',
  // 店铺页搜索
  shopSearch: '//img.alicdn.com/tfs/TB1JEHDy6TpK1RjSZKPXXa3UpXa-48-48.png',
  clearIcon: '//img.alicdn.com/tfs/TB19vfFy4TpK1RjSZR0XXbEwXXa-36-36.png',
  noSearchResults: '//img.alicdn.com/tfs/TB1Zg6zy6DpK1RjSZFrXXa78VXa-636-462.png',
  // checkout
  coPlace: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/co-place-64-64.png',
  coRight: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/co-right-14-24.png',
  coLect: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/co-select-34-34.png',
  coTime: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/co-time-64-64.png',
  coHelp: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/co-help-24-24.png',
  coSelect: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/co-select-34-34.png',
  coSelected: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/co-selected-34-34.png',
  coClose: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/co-close-36-36.png',
  coPay: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/co-pay-32-32.png',
  //评价页图片
  riderPic: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.4/rider-228-228.png',
  emptyStar: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/empty-star-138-138.png',
  noSelect: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/no-select-120-120.png',
  selected: '//gw.alicdn.com/tfs/TB1KiTax7zoK1RjSZFlXXai4VXa-108-108.png',
  starbuckIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/starbuck-icon-240-240.png',
  greenStarPng: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/star-138-138.png',
  unselected: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/unSelected-108-108.png',
  upset: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/upset-216-216.png',
  onUpset: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/onUpset-216-216.png',
  ok: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/ok-216-216.png',
  onOk: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/onOk-216-216.png',
  good: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/good-216-216.png',
  onGood: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/onGood-300-300.png',
  pencil: '//gw.alicdn.com/tfs/TB1c1nwx4jaK1RjSZKzXXXVwXXa-60-60.png',
  cancel: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/x-54-48.png',
  notbad: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/not-bad-144-144.png',
  general: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/not-good-144-144.png',
  great: '//gw.alicdn.com/tfs/TB19hK9xVYqK1RjSZLeXXbXppXa-144-144.png',
  bad: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/bad-144-144.png',
  updatePic: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/updatePic-420-420.png',
  //弹窗背景
  starMap: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/star-map-1848-582.png',
  more: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/more-96-24.png',
  greenArrow: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/green-arrow-24-42.png',
  ratingActive: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/rating-active-201-33.png',
  ratingEmpty: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/rating-empty-201-33.png',
  // noDataTip
  noShop: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/no-shop-220-220.png',
  // 售后icon
  afterBuyIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/after-buy-icon-35-36.webp',
  // 取消按钮
  cancelIcon: '//gw.alicdn.com/tfs/TB1ODD7wHrpK1RjSZTEXXcWAVXa-32-32.png',
  serviceIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/service-icon-36-37.webp',
  rightArrow: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/rightArrow-24-24.webp',
  rider: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/rider-104-108.webp',
  videoIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/video-156-156.webp',
  invoiceIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/invoice-icon-12-12.webp',
  defaultRider: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.2/defaultRider-76-76.webp',
  indexEleBg: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.6/index-ele-bg-1125-840.png',
  giftIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.3/gift-icon-90-90.png',
  giftStore: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.3/index-tm-icon-90-90.png',
  user: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.3/user-40-52.png',
  arrowWhite: '//img.alicdn.com/tfs/TB1rK2trNTpK1RjSZFGXXcHqFXa-16-10.png',
  aboutIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.6/about-icon-80-80.webp',
  cardBag: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.6/cardBag-icon-80-80.webp',
  closeIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.6/close-icon-58-58.webp',
  myGiftIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.6/myGift-icon-80-80.webp',
  orderIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.6/order-icon-80-80.webp',
  plusDisable: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.6/plus-disable-44-44.png',
  myService: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.6/service-icon-80-80.webp',
  vipCardIcon: '//g.alicdn.com/o2o-fe/star-bucks-image/0.0.6/vipCard-icon-80-80.webp',
  // 新店
  newShopIcon: '//gw.alicdn.com/tfs/TB1bnISmirpK1RjSZFhXXXSdXXa-84-42.png',
  // 品牌店
  brandShopIcon:
    '//gw.alicdn.com/tfs/TB1NbcVmkvoK1RjSZFwXXciCFXa-84-42.png',
  exceptionAlertImage: '//gw.alicdn.com/tfs/TB1WCAhwxTpK1RjSZFKXXa2wXXa-400-400.png',
  blueStarPng: '//gw.alicdn.com/tfs/TB1Q5fYwQPoK1RjSZKbXXX1IXXa-138-138.png',
  alertDialogPhoneImage: '//gw.alicdn.com/tfs/TB1mefpwNjaK1RjSZFAXXbdLFXa-280-280.png',
  defaultUserAvatar: 'https://gw.alicdn.com/tfs/TB1IReky6TpK1RjSZKPXXa3UpXa-180-180.png',
  defaultShopAvatar: 'https://gw.alicdn.com/tfs/TB18l1vy7voK1RjSZFwXXciCFXa-180-180.png',  
  //频道列表
  shopSearchIcon: 'gw.alicdn.com/tfs/TB1HycJygTqK1RjSZPhXXXfOFXa-60-60.png',
  shopMoreIcon: 'gw.alicdn.com/tfs/TB1Q7UTyhTpK1RjSZFMXXbG_VXa-60-12.png',
  shopBackIcon: 'gw.alicdn.com/tfs/TB1CwM4yhjaK1RjSZFAXXbdLFXa-30-57.png',

  superVip: 'https://gw.alicdn.com/tfs/TB1xiZqzpzqK1RjSZFCXXbbxVXa-102-28.png',
  taobao88Vip: 'https://gw.alicdn.com/tfs/TB1rkBkzFzqK1RjSZFoXXbfcXXa-84-28.png',
  super88Vip: 'https://gw.alicdn.com/tfs/TB1uiNnzNTpK1RjSZFMXXbG_VXa-160-28.png'

};