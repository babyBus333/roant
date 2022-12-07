import { merge } from 'lodash';
import { useContext } from 'react';
import RokidConfigContext from 'roant/Rconfig-provider';
import { defaultConfig } from 'roant/Rconfig-provider/defaultConfig';

const useConfig = () => {
  const rokidConfig = useContext(RokidConfigContext);
  return merge(defaultConfig, rokidConfig);
};

export default useConfig;
