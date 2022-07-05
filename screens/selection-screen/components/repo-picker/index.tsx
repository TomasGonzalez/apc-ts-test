import React from 'react';

import AutoCompleteSelectInput from 'components/auto-complete-select-input';
import useRepoPickerLogic from './hooks/useRepoPickerLogic';

const OrgPicker = () => {
  const repoPickerLogic = useRepoPickerLogic();
  return <AutoCompleteSelectInput {...repoPickerLogic} />;
};

export default OrgPicker;
