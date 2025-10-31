import styled from 'styled-components';
function StyledComp(){
    const Heading = styled.h1
    `color:green;
    border:1px solid green;
    border-radius:5px;
    margin:20px;
    padding:20px
    `

    const StyleBtn=styled.button({
        color:'red',
        border:'1px solid green',
        borderRadius:'5px',
        margin:'20px',
        padding:'20px'
    })
    return(
        <>
        <h1>Styled Components in React JS</h1>
        <Heading>Heading 1</Heading>
        <Heading>Heading 2</Heading>
        <Heading>Heading 3</Heading>
        <StyleBtn>Login</StyleBtn>
        <StyleBtn>CLear</StyleBtn>
        </>
    )
}

export default StyledComp