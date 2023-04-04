import { merge } from 'lodash';
import { useContext } from 'react';
import RoantConfigContext from 'roant/Rconfig-provider';
import { defaultConfig } from 'roant/Rconfig-provider/defaultConfig';

const useConfig = () => {
  const roantConfig = useContext(RoantConfigContext);
  return merge(defaultConfig, roantConfig);
};

export default useConfig;
