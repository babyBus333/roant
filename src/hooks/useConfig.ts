import { merge } from 'lodash';
import { useContext } from 'react';
import RoantConfigContext from 'rokid-roant/Rconfig-provider';
import { defaultConfig } from 'rokid-roant/Rconfig-provider/defaultConfig';

const useConfig = () => {
  const roantConfig = useContext(RoantConfigContext);
  return merge(defaultConfig, roantConfig);
};

export default useConfig;
