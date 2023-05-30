import styled from '@emotion/styled';

export const Container = styled.div`
width:100%;

`;
export const FormBox = styled.form`
width:50%;
margin-left:auto ;
margin-right:auto ;
margin-top: 20px;
`;
export const OrdersBox = styled.div`
width:100%;

`;
export const Input = styled.input`
      display: block;
      width: 100%;
      height: calc(2.25rem + 2px);
      padding: 0.375rem 0.75rem;
      margin-bottom:16px;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #bdbdbd;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;


    &::placeholder {
      color: #212529;
      opacity: 0.4;
    }

    &:focus {
      color: #212529;
      background-color: #fff;
      border-color: #bdbdbd;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }

    &:disabled,
    &[readonly] {
      background-color: #f5f5f5;
      opacity: 1;
    }
`