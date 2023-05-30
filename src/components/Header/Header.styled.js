import styled from '@emotion/styled';
import { NavLink as LinkNav } from "react-router-dom";

export const Head = styled.div`
display:flex;
justify-content:space-between;
 padding:20px;
 background-color:sienna;
`;

export const NavLink = styled(LinkNav)`
color:whitesmoke;
text-transform:uppercase;
&:not(:first-of-type){
    margin-left:16px;
}
&.active{
    border-bottom:5px solid red
}
`;

export const Container = styled.div`
display:flex;
`