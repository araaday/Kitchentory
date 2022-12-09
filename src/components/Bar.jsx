import styled from 'styled-components';

const Container = styled.div`
    height : 40px;
    background-color : black;
    color:white;
    font-weight : bold;
   
`

const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;


const Featured = styled.div`
    flex : 1;
    display : flex;
    text-align : center;
    justify-content: center;
    letter-spacing : 3px;
    cursor  : pointer;
`;

const Men = styled.div`
    flex : 1;
    display : flex;
    text-align : center;
    justify-content: center;
    letter-spacing : 3px;
    cursor  : pointer;
`;

const Women = styled.div`
    flex : 1;
    display : flex;
    text-align : center;
    justify-content: center;
    letter-spacing : 3px;
    cursor  : pointer;
`;

const Child = styled.div`
    flex : 1;
    display : flex;
    text-align : center;
    justify-content: center;
    letter-spacing : 3px;
    cursor  : pointer;
`;

const Sale = styled.div`
    flex : 1;
    display : flex;
    text-align : center;
    justify-content: center;
    letter-spacing : 3px;
    color : yellow;
    cursor  : pointer;
`;

const Bar = () => {
    return (
        <Container>
            <Wrapper>
                <Featured>
                    ALL INGREDIENTS
                </Featured>
                <Men>
                    INGREDIENTS THRESHOLD
                </Men>

            </Wrapper>
        </Container>
    )
}

export default Bar