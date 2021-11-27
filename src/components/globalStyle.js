import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `

        body {
            background-color: ${({theme}) => theme.backgroundColor};
        }

        .card, .search, .s-input, .filter, .dropdown, .header, .button {
            background-color: ${({theme}) => theme.elements};
        }

        .card-title , .value-title , .value, .dropdown, .header, .s-input, .theme-switch, .button {
            color:${({theme}) => theme.text};
        }
        
        .icon {
            fill:${({theme}) => theme.textDim};
        }
`