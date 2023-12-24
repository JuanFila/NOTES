import {Container} from "./style";

export function ButtonText({title, isActive = false, ...rest}) {
    return(
        <Container 
        {...rest}
        type="button"
        $isactive={isActive.toString()}
        >
            {title}
        </Container>
    )
}