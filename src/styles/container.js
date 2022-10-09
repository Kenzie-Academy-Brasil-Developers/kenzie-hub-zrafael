import styled from "styled-components";
import { Link } from "react-router-dom";

export const GoToLogin = styled(Link)`
  background-color: var(--Grey-3);
  color: var(--Grey-0);

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-size: 12px;
  font-weight: 600;

  min-height: 40px;
  width: 65px;

  border-radius: 4px;

  &:hover {
    background-color: var(--Grey-2);
  }
`;

export const LoginContainer = styled.div`
  width: 100vw;
  max-width: 450px;
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

export const RegisterContainer = styled.div`
  width: 100vw;
  max-width: 470px;
  min-height: 100vh;
  margin: 20px 0px;
  padding: 0px 20px;

  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;

  img {
    height: 20px;
    width: auto;
  }

  nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    min-height: 40px;
  }
`;

export const HomeContainer = styled.div`
  width: 100vw;
  margin: 20px 0px;

  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;

  img {
    height: 20px;
    width: auto;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 780px;
    min-height: 70px;
    padding: 0px 20px;
  }

  header {
    width: 100%;
    min-height: 120px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top: solid 1px var(--Grey-2);
    border-bottom: solid 1px var(--Grey-2);
  }

  header > div {
    width: 100%;
    max-width: 780px;
    padding: 0px 20px;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    p {
      color: var(--Grey-1);
      font-size: 12px;
      font-weight: 600;
    }
  }

  main {
    width: 100%;
    max-width: 780px;
    padding: 0px 20px;
    gap: 25px;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;

    p {
      color: var(--Plain-white);
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
