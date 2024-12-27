import Link from "next/link"
import styled from "styled-components"

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`

export const Picture = styled.picture`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`
export const Span = styled.span`
  color: ${(props) => props.theme.colors["base-accent"]};
  font-size: 21px;
  line-height: 26px;
  font-weight: 800;
`
