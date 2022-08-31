import { BaseButton, TwitterButton } from "./button.styles";

const getButton = (type = "base") =>
    ({
        base: BaseButton,
        twitter: TwitterButton,
    }[type]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);

    return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;

// import { ReactComponent as TwitterLogo } from "../../assets/twitterLogo.svg";
/* <Button type="twitter">
    Share on <TwitterLogo className="twitter-logo" />
</Button>; */
