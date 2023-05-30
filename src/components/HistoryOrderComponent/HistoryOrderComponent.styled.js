import styled from '@emotion/styled';

export const CardContainer = styled.div`
width:150px;
height:220px;
margin-bottom:10px;
background-color:sienna;
border: 1px solid sienna;
/* border:1px solid red; */
`;
export const ImgContainer = styled.div`
width:150px;
height:100px;
`;
export const InfoBox = styled.div`
display:flex;
font-size:14px;
font-weight:600;
color:white;
height:120px;
flex-direction:column;
justify-content:space-between;
`;

export const CardsContainer = styled.div`
width:80%;
display:flex;
flex-wrap:wrap;
padding:10px;
gap:8px;
`;
export const OrderBox = styled.div`
display:flex;
border-bottom:1px solid black;

`;
export const TotalBox = styled.div`
width:20%;
display:flex;
justify-content:center;
align-items:center;
font-size:24px;
font-weight:700;
`;