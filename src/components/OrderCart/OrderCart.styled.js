import styled from '@emotion/styled';

export const RemoveBtn = styled.button`
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
`

export const ImgBox = styled.div`
width:300px;
height:200px;
`


export const InfoBox = styled.div`
width:50%;
display:flex;
flex-direction:column;
margin-left:20px;
padding:10px;
justify-content:space-between;
align-items:center;
`


export const CardText = styled.p`
color: wheat;
font-size:16px;
font-weight:600;
margin:0;
text-transform:uppercase;
`

export const Input = styled.input`
 display: block;
      width: 80%;
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

export const Container = styled.div`
background-color:sienna;
border: 1px solid sienna;
margin-bottom:10px;
`