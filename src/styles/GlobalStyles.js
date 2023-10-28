import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: gray;
}

li{
    list-style: none;
}
`;
