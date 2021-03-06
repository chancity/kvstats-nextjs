import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,::after,::before{background-repeat:no-repeat;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}body{margin:0}h1{font-size:2em;margin:0 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{text-decoration:none;color:inherit;background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-disabled]{cursor:default}

    html, body {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        font-size: ${({theme}) => theme.fontSizes.desktop};
        color: ${({theme}) => theme.colors.bodyColor};
    }
    * {
        font-family: ${({theme}) => theme.fontFamily};
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    button {
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        font-weight: 600;
    }
    button > * {
      pointer-events: none;
    }
    a > * {
      pointer-events: none;
    }
    p {
        display: block;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
    }
    ul{
        list-style: none;
    }
    input{
        border-radius: 0;
    }
    .smartbanner {
      position: absolute;
      top: 0;
      left: 0;
      overflow-x: hidden;
      width: 100%;
      height: 84px;
      background: #f3f3f3;
    }

    .smartbanner .smartbanner__exit {
      position: absolute;
      top: calc(50% - 6px);
      display: block;
      border: 0;
      text-align: center;
      left: 6px;
      margin-right: 7px;
      width: 17px;
      height: 17px;
      color: #757575;
      background: #f3f3f3;
      font-family: 'ArialRoundedMTBold', Arial;
      font-size: 20px;
      font-weight: bold;
      -webkit-font-smoothing: subpixel-antialiased;
      line-height: 17px;
    }

    .smartbanner .smartbanner__exit::before, .smartbanner .smartbanner__exit::after {
      position: absolute;
      width: 1px;
      height: 12px;
      background: #757575;
      content: ' ';
    }

    .smartbanner .smartbanner__exit::before {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    .smartbanner .smartbanner__exit::after {
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    .smartbanner .smartbanner__icon {
      position: absolute;
      top: 10px;
      left: 30px;
      width: 64px;
      height: 64px;
      border-radius: 15px;
      background-size: 64px 64px;
      background-color: transparent;
      box-shadow: none;
    }

    @media only screen and (max-width: 345px) {
      .smartbanner .smartbanner__icon {
        left: 25px;
        width: 60px;
        height: 60px;
        background-size: 60px 60px;
      }
    }

    .smartbanner .smartbanner__info {
      position: absolute;
      top: 10px;
      left: 104px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      overflow-y: hidden;
      width: 60%;
      height: 64px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      color: #757575;
    }

    @media only screen and (max-width: 345px) {
      .smartbanner .smartbanner__info {
        left: 93px;
      }
    }

    .smartbanner .smartbanner__info .smartbanner__info__title {
      font-size: 16px;
      font-weight: bold;
    }

    .smartbanner .smartbanner__info .smartbanner__info__author, .smartbanner .smartbanner__info .smartbanner__info__price {
      font-size: 12px;
      font-weight: bold;
    }

    @media only screen and (max-width: 335px) {
      .smartbanner .smartbanner__info .smartbanner__info__author, .smartbanner .smartbanner__info .smartbanner__info__price {
        font-size: 9px;
      }
    }

    @media only screen and (min-width: 336px) and (max-width: 397px) {
      .smartbanner .smartbanner__info .smartbanner__info__author, .smartbanner .smartbanner__info .smartbanner__info__price {
        font-size: 10px;
      }
    }

    .smartbanner .smartbanner__button {
      position: absolute;
      z-index: 1;
      display: block;
      min-width: 10%;
      font-size: 18px;
      text-align: center;
      text-decoration: none;
      top: 30px;
      right: 10px;
      min-width: 12%;
      border-radius: 0;
    }

    .smartbanner .smartbanner__button .smartbanner__button__label {
      color: #000;
      font-size: 14px;
      font-weight: bold;
      display: block;
      padding: 0 5px;
      box-shadow: none;
      line-height: 24px;
      text-align: center;
      text-shadow: none;
      text-transform: none;
    }

    .smartbanner .smartbanner__button .smartbanner__button__label:active, .smartbanner .smartbanner__button .smartbanner__button__label:hover {
      color: #000080;
    }

    @media only screen and (max-width: 397px) {
      .smartbanner .smartbanner__button .smartbanner__button__label {
        font-size: 10px;
      }
    }
`;

export default GlobalStyle;
