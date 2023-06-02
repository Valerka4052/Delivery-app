import { Container, Input, Item } from "./form.styled"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useEffect } from "react";


export const Form = ({ getUserInfo, userIformation, getAdress, getCoords, isLoaded }) => {
    const {
        suggestions: { status, data },
        setValue,
        init,
        clearSuggestions,
    } = usePlacesAutocomplete({
        callbackName: "YOUR_CALLBACK_NAME",
        requestOptions: {
        },
        debounce: 300,
    });
    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    const handleInput = (e) => {
        setValue(e.target.value);
        getUserInfo(e);
    }

    const handleSelect = ({ description }) =>
        () => {
            getAdress(description);
            setValue(description, false);
            clearSuggestions();
            getGeocode({ address: description }).then((results) => {
                const { lat, lng } = getLatLng(results[0]);
                getCoords({ lat, lng })
            });
        };
    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <Item key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </Item>
            );
        });
    useEffect(() => {
        if (isLoaded) init();
    }, [init, isLoaded]);


    return (
        <Container >
            <div ref={ref}>
                <Input type="text" placeholder="address" name="address" value={userIformation.address} onChange={handleInput} /> {status === "OK" && <ul>{renderSuggestions()}</ul>}</div>
            <Input type="email" placeholder="email" name="email" value={userIformation.email} onChange={(e) => getUserInfo(e)} />
            <Input type="tel" placeholder="phone" name="phone" value={userIformation.phone} onChange={(e) => getUserInfo(e)} />
            <Input type="text" placeholder="name" name="name" value={userIformation.name} onChange={(e) => getUserInfo(e)} />
        </Container>
    );
};

