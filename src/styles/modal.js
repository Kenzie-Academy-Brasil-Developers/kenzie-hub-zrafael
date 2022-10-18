import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    top:0px;

    background-color: var(--Modal);
    
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    width: 100vw;
    max-width: 370px;
    min-height: 100vh;
    padding: 0px 20px;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
    
    img {
        height: 20px;
        width: auto;
    }
`;