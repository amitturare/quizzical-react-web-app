import { ReactComponent as LoaderSVG } from "../../assets/loader.svg";

import { LoaderContainer } from "./loader.styles";

const Loader = () => {
    return (
        <LoaderContainer>
            <LoaderSVG className="loader-svg" />
        </LoaderContainer>
    );
};

export default Loader;
