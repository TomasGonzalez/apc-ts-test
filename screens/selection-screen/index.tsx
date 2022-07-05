import React from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components';

import MainView from 'components/main-view.tsx';
import SectionView from 'components/section-view';
import OrgPicker from './components/org-picker';
import RepoPicker from './components/repo-picker';
import Button from 'components/button';
import useStore from 'stores/MainStore';

const ContainerView = styled(MainView)`
  align-items: center;
  justify-content: center;
`;

const SelectionScreen = () => {
  const organization = useStore((state) => state.organization);
  const repository = useStore((state) => state.repository);

  return (
    <ContainerView>
      <SectionView>
        <View style={[Platform.select({ ios: { zIndex: 10 } })]}>
          <OrgPicker />
        </View>
        <View style={[Platform.select({ ios: { zIndex: 9 } })]}>
          <RepoPicker />
        </View>
        <View style={{ marginTop: 8 }}>
          <Button
            disabled={!organization || !repository}
            title={'Get Issues'}
            onPress={() => console.log('test')}
          />
        </View>
      </SectionView>
    </ContainerView>
  );
};

export default SelectionScreen;
