import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';

const slideIn = keyframes`
  from {
   transform: translateY(-2rem);
  }
  to {
    transform: translateY(0);
  }
`;

export const ERROR_COLOR = '#e02924';
export const STANDARD_COLOR = '#656565';

export const FloatLabel = styled.label`
  position: absolute;
  left: 1.1rem;
  font-weight: 300;
  top: 1.15rem;
  font-size: ${(p) => (p.active ? '.75rem' : '1rem')};
  color: ${(p) => (p.error ? ERROR_COLOR : STANDARD_COLOR)};
  letter-spacing: 0.005625rem;
  pointer-events: none;
  transition: all 0.2s ease-in;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    z-index: 2;
    width: 88%;
    background: #fff;
  }
  ${({active}) => (active ? 'transform: translateY(-.8rem);' : '')};
  ${({hideOnActive}) => (hideOnActive ? 'display: none;' : '')};

`;

export const FloatContainer = styled.div`
  position: relative;
  height: min-content;
  width: 100%;
  padding-bottom: 1.5rem;
  overflow: hidden;
`;
/* ${(p) => p.error && `padding-bottom: 0.375rem`}*/
export const ErrorContainer = styled.div`
  overflow: hidden;
  line-height: unset;
  position: absolute;
`;

export const ErrorMessage = styled.span`
  line-height: inherit !important;
  margin-top: 0.25rem;
  color: ${ERROR_COLOR};
  font-size: 0.75rem;
  animation: ${slideIn} 0.2s ease-in-out;
  display: block;
  float: left;
`;

const FloatInput = styled.input`
  letter-spacing: 0.005625rem;
  border: 0.0625rem solid ${(p) => (p.error ? ERROR_COLOR : STANDARD_COLOR)};
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 1.2rem;
  padding-bottom: 0.8rem;
  font-size: 1rem;
  height: 3.5rem;
  width: 100%;
  ::-ms-clear {
    display: none;
  }
`;

const _FloatInput = React.forwardRef((props = {}, ref) => {
    const [active, setActive] = useState(false);
    const {
        value,
        floatLabel,
        hideOnActive,
        error,
        errorMessage,
        onFocus,
        onBlur,
        id,
    } = props;

    // eslint-disable-next-line no-throw-literal
    if (!id) throw `FloatInput: No element id specified for '${floatLabel}'.`;

    const handleFocus = (e) => {
        onFocus && onFocus(e);
        setActive(true);
    };
    const handleBlur = (e) => {
        onBlur && onBlur(e);
        setActive(false);
    };

    const floatActive = (value || active || error);
    return (
        <FloatContainer error={error}>
            <FloatLabel htmlFor={id}
                        error={error}
                        active={floatActive}
                        hideOnActive={hideOnActive && floatActive}
            >
                {floatLabel}
            </FloatLabel>
            <FloatInput
                aria-describedby={`${id}-error`}
                {...props}
                ref={ref}
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
            />
            <ErrorContainer id={`${id}-error`}>
                {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </ErrorContainer>
        </FloatContainer>
    );
});

export default _FloatInput;
