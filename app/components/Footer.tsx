"use client";

import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #282828;
  font-family: "Cinzel", serif;
  color: #d3d3d3;
  padding: 2vh 2vw;
  text-align: center;
  border-top: 5px solid darkgoldenrod;
  transition: color 0.2s;
  font-size: calc(10px + 0.5vw);
`;

const StyledLink = styled.a`
  color: darkgoldenrod;
  text-decoration: none;
  &:hover {
    color: #e6c300;
  }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                All Rights Reserved by Yunzhe Bi{" "}
                <Link href="" passHref>
                    <StyledLink>Credits</StyledLink>
                </Link>{" "}
                &copy;
            </p>
        </StyledFooter>
    );
}
