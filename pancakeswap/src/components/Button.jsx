import styled, { DefaultTheme, css } from "styled-components";
import "../style.scss"
import { color } from "./Color";


export const StyledButton = styled.div
`@include flexCenter;
height: 4.8rem;
width: 16.5rem;
box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px 0px inset;
border-radius: 1.6rem;
line-height: 1.6rem;
font-size: 1.6rem;
text-align: center;
letter-spacing: 0.48px;
padding-inline: 2frem;
cursor: pointer;
background-color:${props=> props.primary?color.tiffanyBrand:color.ocra};`

