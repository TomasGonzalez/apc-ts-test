import React from 'react';

import AutoCompleteSelectInput from 'components/auto-complete-select-input';
import useOrgPickerLogic from './hooks/useOrgPickerLogic';

const OrgPicker = () => {
  const orgPickerLogic = useOrgPickerLogic();
  return <AutoCompleteSelectInput {...orgPickerLogic} />;
};

export default OrgPicker;
