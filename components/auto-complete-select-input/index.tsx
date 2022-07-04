import React from 'react';
import {
  AutocompleteDropdown,
  AutocompleteDropdownProps,
} from 'react-native-autocomplete-dropdown';

const AutoCompleteSelectInput = (props: AutocompleteDropdownProps) => (
  <AutocompleteDropdown
    clearOnFocus={false}
    closeOnBlur={true}
    closeOnSubmit={false}
    {...props}
  />
);

export default AutoCompleteSelectInput;
