import styled from "styled-components";
import bgImg from '../../../../assets/bg-white.jpg'
import {voeComigoTheme} from '../../../../theme/globalTheme'

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url(${bgImg});
    background-size: cover;
`;

export const TextArea = styled.div`
    text-align: center;

    h1{
        font-size: ${voeComigoTheme.fontSize36};
        font-weight: ${voeComigoTheme.fontWeight600};
        color: ${voeComigoTheme.active};
    }

    span{
        font-size: ${voeComigoTheme.fontSize22};
        color: ${voeComigoTheme.activeLight};
    }
`;

export const Content = styled.section`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .button-area{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        button{
            width: 100%;
            height: 48px;
        } 

        .primary{
            background-color: ${voeComigoTheme.primary};
        }

        .secondary{
            color: ${voeComigoTheme.primary};
            border: 1px solid ${voeComigoTheme.primary};
        }
    }
`
