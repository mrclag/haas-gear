const INITIAL_STATE = {
  sections: [
    {
      title: 'stationary',
      imageUrl: 'https://i.ibb.co/hFjhBXY/haas-pen2.jpg',
      id: 1,
      linkUrl: 'shop/stationary'
    },
    {
      title: 'stickers',
      imageUrl: 'https://i.ibb.co/QHwLvZc/haas-stickers.png',
      id: 2,
      linkUrl: 'shop/stickers'
    },
    {
      title: 'misc',
      imageUrl: 'https://i.ibb.co/WWqjMmv/haas-mug2.jpg',
      id: 3,
      linkUrl: 'shop/misc'
    },
    {
      title: 'shirts',
      imageUrl: 'https://i.ibb.co/k0sbhWf/haas-tee2.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/shirts'
    },
    {
      title: 'other apparel',
      imageUrl: 'https://i.ibb.co/xHNJrjN/cal-socks.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/apparel'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
