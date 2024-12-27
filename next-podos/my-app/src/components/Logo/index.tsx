'use client'

import * as S from "./styles"

export default function Logo() {
  return (
    <S.LogoLink href="/">
      <S.Picture>
        <source srcSet="/images/podos-logo.webp" type="image/webp" />
        <S.Img src="/images/podos-logo.png" alt="PODOS logo" />
      </S.Picture>
      <S.Span> PODOS</S.Span>
    </S.LogoLink>
  )
}