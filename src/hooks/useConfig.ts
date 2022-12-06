import { merge } from 'lodash';
import RokidConfigContext from 'rant/Rconfig-provider';
import { defaultConfig } from 'rant/Rconfig-provider/defaultConfig';
import { useContext } from 'react';

const useConfig = () => {
  const rokidConfig = useContext(RokidConfigContext);
  return merge(defaultConfig, rokidConfig);
};

export default useConfig;
