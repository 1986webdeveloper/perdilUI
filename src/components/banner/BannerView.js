import React, { useEffect, useState } from 'react';
import Images from '../../assets/Images';
import Banner from './Banner';

const BannerView = () => {
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    if (!bannerVisible) {
      setTimeout(() => {
        setBannerVisible(true);
      }, 2000);
    }
  }, [bannerVisible]);

  return (
    <Banner
      visible={bannerVisible}
      onPressClose={() => setBannerVisible(false)}
      heading={'New Feature'}
      headingImage={Images.newFeature}
      message={'Click here to learn about our latest feature'}
      onPressBanner={() => {}}
    />
  );
};

export default BannerView;
