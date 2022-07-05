import React from 'react';
import styled from 'styled-components';

import { StyledButton } from './types';

const StyledPressable = styled.Pressable`
  display flex;
  justify-content: center;
  align-items: center;
  padding: ${(props: StyledButton) => props?.theme?.defaultPadding};
  border-radius: ${(props: StyledButton) => props?.theme?.defaultPadding};
  background-color: ${(props: StyledButton) => props?.theme?.colors.contrast};
`;

const StyledButtonText = styled.Text`
  color: ${(props: StyledButton) => props?.theme?.colors.background};
`;

const Button = (props: StyledButton) => {
  return (
    <StyledPressable
      style={({ pressed }: { pressed: boolean }) => ({
        opacity: pressed || props.disabled ? 0.3 : 1,
      })}
      {...props}
    >
      <StyledButtonText>{props?.title}</StyledButtonText>
    </StyledPressable>
  );
};

export default Button;
