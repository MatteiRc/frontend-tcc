import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--mainDark);
color: var(--mainDark);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
&:hover i{
    background: var(--mainColor);
    color: var(--mainYellow);
}
&:focus{
    outline: none;
}
`;
export const ButtonServicos = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--mainDark);
color: var(--mainDark);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
&:hover i{
    background: var(--mainColor);
    color: var(--lightBlue);
}
&:focus{
    outline: none;
}
`;