//\\

import React from "react";
import styled from "styled-components";
import { ROUTES } from "../__ROUTES__";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
`;

const LinkReset = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const NavButton = styled.div`
	background-color: var(--secondary-color);
	border-radius: 3px;
	min-width: 100px;
	padding: 10px 0;
	text-align: center;
	font-weight: var(--font-weight-bold);
    color: var(--text-color-light);
    margin-right: 5px;
	margin-bottom: 5px;
    &:hover {
        transform: translateY(-1px)
    }
    &:active {
        transform: translateY(0);
    }
	
`;


export const Navbar = () => {
	return (
		<Wrapper>
			{ROUTES.map((route) => {
				if (route.navigatable) {
					return (
						<LinkReset to={route.path}>
							<NavButton>{route.label}</NavButton>
						</LinkReset>
					);
				}
			})}
		</Wrapper>
	);
};
