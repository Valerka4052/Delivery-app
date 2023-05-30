import { Container, Head, NavLink } from "./Header.styled";
export const Header = () => {
    return (
        <Head >
            <Container>
                <NavLink to={'/'}>Shop</NavLink>
                <NavLink to={'/card'}>Shopping Card</NavLink>
            </Container>
            <NavLink to={'/history'}>History</NavLink>
        </Head>
    );
};