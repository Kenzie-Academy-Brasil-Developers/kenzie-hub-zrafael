import styled from "styled-components";
import { Link } from "react-router-dom";

export const Forms = styled.form`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 15px;

  background-color: var(--Grey-3);
  width: 100%;
  padding: 40px 20px;

  border-radius: 4px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  h2 {
    font-size: 18px;
    font-weight: 700;

    margin-bottom: 15px;
  }

  strong {
    color: var(--Grey-1);

    font-size: 12px;
    font-weight: 400;

    margin: 20px auto 10px;
  }

  label {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: 7px;

    font-size: 12px;
    font-weight: 400;

    width: 100%;
  }

  label > span {
    color: var(--Grey-1);
    font-size: 10px;
  }

  input {
    background-color: var(--Grey-2);
    color: var(--Grey-0);

    font-size: 16px;
    font-weight: 400;

    width: 100%;
    min-height: 48px;
    padding: 10px 15px;

    border-radius: 4px;
    border: solid 1px var(--Grey-2);
  }

  input:focus {
    background-color: var(--Grey-2);
    border: solid 1px var(--Grey-0);
  }

  input:active {
    background-color: var(--Grey-2);
  }

  select {
    background-color: var(--Grey-2);
    color: var(--Grey-1);

    font-size: 16px;
    font-weight: 400;

    width: 100%;
    min-height: 48px;
    padding: 10px 15px;

    border-radius: 4px;
    border: solid 1px var(--Grey-2);
  }

  select:focus {
    background-color: var(--Grey-2);
    border: solid 1px var(--Grey-0);
  }

  select:active {
    background-color: var(--Grey-2);
  }

  button {
    background-color: var(--Color-primary);
    color: var(--Plain-white);

    font-size: 16px;
    font-weight: 500;

    width: 100%;
    min-height: 48px;

    cursor: pointer;
    border-radius: 4px;
    border: solid 1px var(--Color-primary);
  }

  button:hover,
  button:focus {
    background-color: var(--Color-primary-Focus);
  }

  button:disabled {
    background-color: var(--Color-primary-Negative);

    border: solid 1px var(--Color-primary-Negative);
  }

  .formHeader {
    position: absolute;
    top: 0px;
    background-color: var(--Grey-2);
    width: 100%;
    min-height: 50px;
    padding: 0px 15px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    border-radius: 4px 4px 0px 0px;

    h3 {
      font-size: 14px;
      font-weight: 700;
    }

    h4 {
      color: var(--Grey-1);

      font-size: 14px;
      font-weight: 600;

      cursor: pointer;
      &:hover {
        color: var(--Plain-white);
      }
    }
  }

  .modalForm {
    width: 100%;
    margin-top: 25px;

    display: flex;
    flex-flow: column;
    gap: 15px;
  }
`;

export const RegisterLink = styled(Link)`
  background-color: var(--Grey-1);
  color: var(--Grey-0);

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-size: 16px;
  font-weight: 400;

  min-height: 48px;
  width: 100%;

  border-radius: 4px;
  border: solid 1px var(--Grey-1);

  &:hover {
    background-color: var(--Grey-2);
    border: solid 1px var(--Grey-2);
  }
`;
