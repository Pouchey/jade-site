import { PaymentElement } from "@stripe/react-stripe-js";
import { StyledForm, StyledTitle } from "./style";
import Button from "_components/button";


const DonateForm = () => {
    return(
        <>
            <StyledTitle>Donation</StyledTitle>
            <StyledForm>
                <PaymentElement />
                <Button label="FAIRE LE DON" />
            </StyledForm>
        </>
    )
}

export default DonateForm;