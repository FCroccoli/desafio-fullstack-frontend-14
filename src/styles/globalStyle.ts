import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary:#020887;
        --primary-2:#334195;
        --primary-disabled:#647AA3;
        --grey-4:#121214;
        --grey-3:#212529;
        --grey-2:#343B41;
        --grey-1:#868E96;
        --grey-0:#F8F9FA;
        --success:#3FE864;
        --negative:#E83F5B;
        --white: #FFFFFF;
        --modal-grey: rgba(18, 18, 20, 0.5);
    }
    *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }
    ul, ol{
        list-style: none;
    }
    .App{
        min-height: min-content;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--grey-0);
        overflow: auto;
    }
    @keyframes loadingAnimation{
        0% { transform: rotate(0) }
        90% { transform: rotate(360deg) }
        100% { transform: rotate(360deg) }
    }
`;
