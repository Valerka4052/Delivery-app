import styled from '@emotion/styled';

export const Container = styled.div`
display:flex;
justify-content:space-between;

`
export const OrdersContainer = styled.div`
width:60%;
padding:10px;
border-left:1px solid black;
`
export const TextNoOrders = styled.h2`
font-size:24px;
font-weight:700;
`
export const TotalContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const TotalText = styled.p`
font-size:20px;
font-weight:600;
text-transform:uppercase;
`;
export const OrderButton = styled.button`
text-transform:uppercase;
&:not(:last-of-type){
margin-right:20px;
    }
`;
export const InfoBox = styled.div`
width:40%;
padding-top:20px ;
padding-right:10px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
`;