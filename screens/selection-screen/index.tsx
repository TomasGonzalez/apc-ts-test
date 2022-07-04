import React from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components';

import MainView from 'components/main-view.tsx';
import SectionView from 'components/section-view';
import OrgPicker from './components/org-picker';
import RepoPicker from './components/repo-picker';

const ContainerView = styled(MainView)`
  align-items: center;
  justify-content: center;
`;

const SelectionScreen = () => {
  return (
    <ContainerView>
      <SectionView>
        <View style={[Platform.select({ ios: { zIndex: 10 } })]}>
          <OrgPicker />
        </View>
        <View style={[Platform.select({ ios: { zIndex: 9 } })]}>
          <RepoPicker />
        </View>
      </SectionView>
    </ContainerView>
  );
};

export default SelectionScreen;
