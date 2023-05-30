import { Container, Input } from "./form.styled"

export const Form = ({ getUserInfo,userIformation}) => {
    return (
        <Container >
            <Input type="text" placeholder="address" name="address" value={userIformation.address} onChange={(e) => getUserInfo(e)} />
            <Input type="email" placeholder="email" name="email" value={userIformation.email} onChange={(e) => getUserInfo(e)} />
            <Input type="tel" placeholder="phone" name="phone" value={userIformation.phone} onChange={(e) => getUserInfo(e)} />
            <Input type="text" placeholder="name" name="name" value={userIformation.name} onChange={(e) => getUserInfo(e)} />
        </Container>
    );
}