import React from "react"
import styled from "styled-components"
import { Container } from "reactstrap"

const StyledContainer = styled(Container)`
    max-width: 1600px;
`

const ContainerMax = (props) => {
    return(
        <StyledContainer fluid {...props}>
            {props.children}
        </StyledContainer>
    )
}

export default ContainerMax