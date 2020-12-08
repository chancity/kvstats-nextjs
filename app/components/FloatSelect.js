import React, {useState, forwardRef} from 'react';
import styled, {keyframes} from 'styled-components';
import IconDownArrow from "./IconDownArrow";

const ERROR_COLOR = '#e02924';
const STANDARD_COLOR = '#656565';

const slideIn = keyframes`
  from {
   transform: translateY(-2rem);
  }
  to {
    transform: translateY(0);
  }
`;

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
  z-index: 1;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    z-index: 2;
    width: 88%;
    background: #fff;
  }
  ${(p) => (p.active ? 'transform: translateY(-.8rem);' : '')}
`;

export const FloatContainer = styled.div`
  position: relative;
  height: min-content;
  width: 100%;
  padding-bottom: 1.5rem;
  overflow: hidden;
  ${(p) => p.error && `padding-bottom: 0.375rem`}
`;

export const ErrorContainer = styled.div`
  overflow: hidden;
  line-height: unset;
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

const FloatSelect = styled.select`
  letter-spacing: 0.005625rem;
  border: 0.0625rem solid ${(p) => (p.error ? ERROR_COLOR : STANDARD_COLOR)};
  border-radius: 0.3125rem;
  appearance: none;
  box-sizing: border-box;
  font-size: 1rem;
  height: min-content;
  width: 100%;
  min-height: 3.5rem;
  padding: 1.15rem 1.75rem 0.87rem 1rem;
  line-height: 1.25rem;
  word-break: break-word;
  ::-ms-expand {
    display: none;
  }
  ${(p) => p.wrap === 'true' && 'white-space: pre-wrap;'}
`;

const DownIcon = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: 0;
  pointer-events: none;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  svg {
    width: 0.75rem;
    height: auto;
  }
`;

// TODO I think we can just pass errorMessage
export default forwardRef((props = {}, ref) => {
    const [active, setActive] = useState(false);
    const {
        value,
        floatLabel,
        error,
        id,
        errorMessage,
        options,
        onSelect,
        onFocus,
        onBlur,
        hideBlankOption = false,
        wrap = false,
    } = props;

    // eslint-disable-next-line no-throw-literal
    if (!id) throw `No element id specified for '${floatLabel}'.`;

    const handleFocus = (e) => {
        onFocus && onFocus(e);
        setActive(true);
    };

    const handleSelect = (e) => {
        onSelect && onSelect(e);
        setActive(true);
    };
    const handleBlur = (e) => {
        onBlur && onBlur(e);
        setActive(false);
    };

    return (
        <FloatContainer error={error}>
            <FloatLabel htmlFor={id} error={error} active={active || value || error}>
                {floatLabel}
            </FloatLabel>
            <div style={{position: 'relative'}}>
                <FloatSelect
                    {...props}
                    wrap={wrap.toString()}
                    ref={ref}
                    onFocus={handleFocus}
                    onSelect={handleSelect}
                    onBlur={handleBlur}
                    aria-describedby={`${id}-error`}>
                    {!hideBlankOption && <option/>}
                    {options.map((state) => (
                        <option key={state.value} value={state.value} label={state.label}>
                            {state.label}
                        </option>
                    ))}
                </FloatSelect>
                <DownIcon>
                    <IconDownArrow/>
                </DownIcon>
            </div>
            <ErrorContainer id={`${id}-error`}>
                {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </ErrorContainer>
        </FloatContainer>
    );
});
