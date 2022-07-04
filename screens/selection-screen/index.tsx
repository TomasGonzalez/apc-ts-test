import React from 'react';
import styled from 'styled-components';

import Text from 'components/text/Text';
import MainView from 'components/main-view.tsx';
import SectionView from 'components/section-view';
import OrgPicker from './components/org-picker';

const ContainerView = styled(MainView)`
  align-items: center;
  justify-content: center;
`;

const SelectionScreen = () => {
  return (
    <ContainerView>
      <SectionView>
        <Text>Pick organization: {'\n'}</Text>
        <OrgPicker />
      </SectionView>
    </ContainerView>
  );
};

export default SelectionScreen;
