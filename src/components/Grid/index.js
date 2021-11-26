import react from "react";
import PropTypes from 'prop-types'

//styles

import { Wrapper, Content } from "./Grid.styles";

const Gird = ({header, children}) =>{return(
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)
}

Gird.protoTypes = {
    header: PropTypes.string,
}
export default Gird;