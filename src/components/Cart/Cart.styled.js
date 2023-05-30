import styled from '@emotion/styled';
export const Container = styled.div`
background-color:sienna;
border: 1px solid sienna;
color:white;
`
export const ImageBox = styled.div`
width:300px;
height:200px;
`

export const Button = styled.button`
margin-bottom:24px;
padding: 17px 40px;
 border-radius: 50px;
 border: 0;
 background-color: white;
 box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
 letter-spacing: 1.5px;
 text-transform: uppercase;
 font-size: 15px;
 transition: all .5s ease;


 &:hover {
 letter-spacing: 3px;
 background-color: hsl(261deg 80% 48%);
 color: hsl(0, 0%, 100%);
 box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
}

 &:active { 
 letter-spacing: 3px;
 background-color: hsl(261deg 80% 48%);
 color: hsl(0, 0%, 100%);
 box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
 transform: translateY(10px);
 transition: 100ms;
}
&:not(:first-of-type){
    margin-left:20px;
}
`