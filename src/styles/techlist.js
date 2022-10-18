import styled from "styled-components";

export const ModalLink = styled.button`
    background-color: var(--Grey-3);
    color: var(--Grey-0);

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    
    min-height: 40px;
    width: 40px;

    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: var(--Grey-2);
    }
`;

export const Tecnologias = styled.div`
    width: 100%;
    min-height: 80px;

    ul {
        background-color: var(--Grey-3);
        color: var(--Grey-0);

        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        gap: 15px;

        width: 100%;
        padding: 20px;

        border-radius: 4px;
    }

    li {
        background-color: var(--Grey-4);
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        min-height: 50px;
        padding: 0px 20px;

        border-radius: 4px;

        &:hover{
            background-color: var(--Grey-2);
        }
    }

    li > p {
        font-size: 14px;
        font-weight: 700;
    }

    li > div {
        color: var(--Grey-1);
        
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
        gap: 25px;

        width: 25%;
    }

    li > div > small {
        font-size: 12px;
        font-weight: 400;
    }

    li > div > span {
        cursor: pointer;

        &:hover{
            color: var(--Plain-white);
        }
    }



`;