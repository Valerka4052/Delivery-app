import { CardText, Container, ImgBox, InfoBox, Input, RemoveBtn } from "./OrderCart.styled";

export const OrderCart = ({ item, getCout,removeDish }) => {
    const { imageURL, dish, price,_id } = item;

    const handleChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            getCout(item._id, Number(e.target.value));
        }
    };

    return (
        <Container style={{ display: "flex" }}>
            <ImgBox><img src={imageURL} alt={dish}  /></ImgBox>
            <InfoBox>
                <><CardText>{dish}</CardText><CardText>price: {price} uah</CardText></>
                <Input type="number" name="count" placeholder='0' min={0} onChange={handleChange} />
                <RemoveBtn onClick={()=>removeDish(_id)}>remove</RemoveBtn>
            </InfoBox>
        </Container>
    );
};