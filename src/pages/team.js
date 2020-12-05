import React from "react";
import theme from "theme";
import { Theme, Link, Image, Button, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, Menu } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Team | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Team | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			margin="0 0 0 0"
			padding="16px 0px 16px 0px"
			box-sizing="border-box"
			quarkly-title="Header"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem display="flex" quarkly-title="Logo" md-width="75%" width="25%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link">
						<Image src="https://uploads.quarkly.io/5fcb7cb7e563f3001ecb6d03/images/YT%20banner.png?v=2020-12-05T13:04:24.727Z" width="120px" z-index="3" />
					</Link>
				</StackItem>
				<StackItem width="50%" display="block" quarkly-title="Menu" md-width="25%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" md-justify-content="flex-end" />
					{"        "}
					<Components.BurgerMenu>
						<Override
							slot="menu"
							lg-transform="translateY(0px) translateX(0px)"
							lg-transition="transform 400ms ease 0s"
							md-position="fixed"
							display="flex"
							md-left={0}
							md-top={0}
							md-width="100%"
							md-height="100%"
							padding="0px 0 0px 0"
						>
							<Override
								slot="item"
								text-transform="uppercase"
								text-align="center"
								padding="8px 20px 8px 20px"
								md-padding="16px 40px 16px 40px"
							/>
							<Override slot="item-404" lg-display="none" display="none" />
							<Override slot="item-index" lg-display="none" display="none" />
							<Override
								slot="link"
								md-color="--dark"
								md-opacity=".5"
								md-transition="opacity .15s ease 0s"
								md-hover-opacity="1"
								md-active-opacity="1"
								md-font="16px/24px sans-serif"
								font="--base"
								text-decoration-line="initial"
								color="--dark"
								opacity=".5"
								transition="opacity .15s ease 0s"
								hover-opacity="1"
								letter-spacing="0.5px"
								text-transform="initial"
							/>
							<Override
								slot="link-active"
								md-opacity="1"
								md-cursor="default"
								opacity="1"
								color="--primary"
								cursor="default"
							/>
						</Override>
						<Override slot="icon,icon-close" category="md" icon={MdMenu} />
						<Override slot="icon" category="md" icon={MdMenu} size="36px" />
						<Override
							slot="menu-open"
							md-top={0}
							md-bottom={0}
							md-display="flex"
							md-flex-direction="column"
							md-align-items="center"
							md-justify-content="center"
						/>
						<Override slot="icon-open" md-position="fixed" md-top="24px" md-right="calc(4% + 4px)" />
					</Components.BurgerMenu>
					{"    "}
				</StackItem>
				<StackItem display="flex" quarkly-title="Side" width="25%" md-display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					<Button
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						z-index="5"
						background="--color-primary"
						md-display="none"
						white-space="nowrap"
						border-radius="0px"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Contact Us
					</Button>
					{"   "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
						sm-height="180px"
						md-height="360px"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						color="--light"
						justify-content="center"
						quarkly-title="Title"
						sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						sm-text-align="center"
						text-align="center"
						md-font="--headline2"
					>
						Team.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			sm-padding="0px 0 0px 0"
			quarkly-title="About"
			box-sizing="border-box"
			padding="90px 0px 100px 0px"
			background="--color-lightD1"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 32px 0px 32px"
				sm-padding="24px 0px 24px 0px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				lg-margin="0px 0px 6px 0px"
				lg-text-align="center"
				quarkly-title="Title"
				text-transform="uppercase"
			>
				Who we are
			</Text>
			<Text
				font="--headline3"
				margin="0px 0px 0px 0px"
				letter-spacing="1px"
				color="--dark"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
			>
				We are a gaming team some times recognised as a clan
			</Text>
		</Section>
		<Section
			padding="80px 0px 60px 0px"
			quarkly-title="Team"
			box-sizing="border-box"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.5"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				text-transform="uppercase"
			>
				Meet Us
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 72px 0px"
				letter-spacing="1px"
				color="--dark"
				text-align="center"
				width="100%"
				md-margin="0px 0px 32px 0px"
				lg-margin="0px 0px 42px 0px"
				md-font="--headline3"
			>
				Our-leaders,co-owners,members.
			</Text>
			<Stack
				lg-align-items="flex-start"
				lg-justify-content="center"
				quarkly-title="Cards"
				justify-content="space-between"
				md-justify-content="flex-start"
				sm-width="100%"
			>
				<StackItem
					width="33.33%"
					lg-width="33.33%"
					sm-width="100%"
					sm-margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					quarkly-title="Card"
					md-width="50%"
					md-margin="0px 0px 0px 0px"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="column"
						md-align-items="flex-start"
						md-justify-content="flex-start"
						sm-flex-direction="column"
					/>
					<Box
						background="--color-lightD1 url(https://images.unsplash.com/photo-1603479513261-e3b36c8b958c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						hover-background="--color-lightD1 url(https://artemzhigalin.ru/src/default-website-user-man.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					<Box sm-margin="12px 0px 0px 0px" sm-width="100%">
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
							md-font="--lead"
							md-margin="8px 0px 2px 0px"
						>
							Jgamer playz
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
						>
							Owner
						</Text>
					</Box>
				</StackItem>
				<StackItem
					lg-width="33.33%"
					sm-width="100%"
					sm-margin="0px 0px 0px 0px"
					width="33.33%"
					quarkly-title="Card"
					md-width="50%"
					sm-padding="16px 0px 16px 0px"
				>
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" sm-flex-direction="column" />
					<Box
						background="--color-lightD1 url(https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						hover-background="--color-lightD1 url(https://artemzhigalin.ru/src/default-website-user-woman.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					<Box sm-margin="12px 0px 0px 0px" sm-width="100%">
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
							md-margin="8px 0px 2px 0px"
						>
							Ezotic wolfy
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
						>
							Co-owner
						</Text>
					</Box>
				</StackItem>
				<StackItem
					lg-width="33.33%"
					sm-width="100%"
					sm-margin="0px 0px 20px 0px"
					width="33.33%"
					quarkly-title="Card"
					md-width="50%"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="column"
						sm-flex-direction="column"
					/>
					<Box
						background="--color-lightD1 url(https://images.unsplash.com/photo-1527335480088-278dbeec0ad5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						hover-background="--color-lightD1 url(https://artemzhigalin.ru/src/default-website-user-man.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					<Box sm-margin="12px 0px 0px 0px" sm-width="100%">
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							color="--dark"
							quarkly-title="Name"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
							md-font="--lead"
							md-margin="8px 0px 2px 0px"
							text-align="left"
						>
							Ironclad pizza
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							text-align="left"
						>
							Co-owner
						</Text>
					</Box>
				</StackItem>
				<StackItem
					width="33.33%"
					lg-width="33.33%"
					sm-width="100%"
					sm-margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					quarkly-title="Card"
					md-width="50%"
					md-margin="0px 0px 0px 0px"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="column"
						md-align-items="stretch"
						md-justify-content="flex-start"
						sm-flex-direction="column"
					/>
					<Box
						background="--color-lightD1 url(https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding-bottom="(4 / 3) * 100%"
						padding="0px 0px 121% 0px"
						hover-background="--color-lightD1 url(https://artemzhigalin.ru/src/default-website-user-woman.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					<Box sm-margin="12px 0px 0px 0px" sm-width="100%">
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							md-margin="8px 0px 2px 0px"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
						>
							Avfc ollie
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							Leader
						</Text>
					</Box>
				</StackItem>
				<StackItem
					lg-width="33.33%"
					sm-width="100%"
					sm-margin="0px 0px 0px 0px"
					width="33.33%"
					quarkly-title="Card"
					md-width="50%"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="column"
						sm-flex-direction="column"
					/>
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						hover-background="--color-lightD1 url(https://artemzhigalin.ru/src/default-website-user-man.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						padding-bottom="(4 / 3) * 100%"
					/>
					<Box sm-margin="12px 0px 0px 0px" sm-width="100%">
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							md-margin="8px 0px 2px 0px"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
						>
							Deadshot
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							Member
						</Text>
					</Box>
				</StackItem>
				<StackItem
					lg-width="33.33%"
					sm-width="100%"
					sm-margin="0px 0px 0px 0px"
					width="33.33%"
					quarkly-title="Card"
					md-width="50%"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="column"
						sm-flex-direction="column"
					/>
					<Box
						background="--color-lightD1 url(https://images.unsplash.com/photo-1600106582767-9f8104329e7c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						hover-background="--color-lightD1 url(https://artemzhigalin.ru/src/default-website-user-woman.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						padding-bottom="(4 / 3) * 100%"
					/>
					<Box sm-margin="12px 0px 0px 0px" sm-width="100%">
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							color="--dark"
							quarkly-title="Name"
							md-margin="8px 0px 2px 0px"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
							text-align="left"
						>
							zakthepro7
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							member
						</Text>
					</Box>
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});