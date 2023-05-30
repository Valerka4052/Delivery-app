import { CardContainer, CardsContainer, ImgContainer, InfoBox, OrderBox, TotalBox } from "./HistoryOrderComponent.styled";

export const HistoryOrderComponent = ({ order }) => {
    const { total, dishes } = order;
    return (
        <OrderBox>
            <CardsContainer>
                {dishes.map((item) => <Card item={item} key={item._id} />)}
            </CardsContainer>
            <TotalBox><p>total {total} uah</p></TotalBox>
        </OrderBox>
    );
};

const Card = ({ item }) => {
    const { imageURL, dish, price, count } = item;
    return (
        <CardContainer>
            <ImgContainer><img src={imageURL} alt={dish} width={300} height={200} /></ImgContainer>
            <InfoBox>
                <p>{dish}</p>
                <p >{price} uah x {count} </p>
            </InfoBox>
        </CardContainer>
    );
};