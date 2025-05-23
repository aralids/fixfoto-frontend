import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavBar = ({ currBackground, sectionSize }) => {
	const navbarItem = (sectionName, seqNumber) => (
		<a
			className={
				currBackground === `${sectionName.toLowerCase()}-background`
					? "smallest-text-unit link link-in-view"
					: "smallest-text-unit link"
			}
			onClick={() =>
				window.scrollTo(
					0,
					window.innerHeight * (sectionSize / 100) * seqNumber +
						window.innerHeight * 0.15
				)
			}
		>
			{sectionName}
		</a>
	);
	return (
		<>
			<Navbar
				expand="lg"
				fixed="top"
				className="m-0 p-0 vw-100 d-none d-lg-block"
			>
				<Container
					className="d-flex align-items-between justify-content-between align-items-start pt-3 ps-3 pe-3 pt-lg-5 ps-lg-5 pe-lg-5"
					style={{
						minWidth: "100%",
					}}
				>
					<Navbar.Brand href="#start" className="m-0 p-0">
						<div href="#start" className="logo-text">
							FIX
							<br />
							FOTO
							<br />
							STUDIO1
						</div>
					</Navbar.Brand>
					<div>
						<Navbar.Toggle
							className="mb-4"
							aria-controls="basic-navbar-nav"
							style={{ width: 151 }}
						/>
						<Navbar.Collapse
							className="m-0 p-0"
							id="basic-navbar-nav"
							style={{ width: "fit-content", maxWidth: 151 }}
						>
							<Nav className="me-auto d-flex flex-column">
								{...[
									"Passfotos",
									"Bewerbungsbilder",
									"Portraits",
									"Fotoprodukte",
									"Rahmen",
									"Labor",
									"Videokassetten",
									"Glasfotos",
									"Kopien",
								].map((item, index) => navbarItem(item, index + 1))}
							</Nav>
						</Navbar.Collapse>
					</div>
				</Container>
			</Navbar>
			<Navbar expand="lg" key="lg" fixed="top" className="mb-3 d-lg-none">
				<Container fluid>
					<Navbar.Brand href="#start" className="m-0 p-0">
						<div href="#start" className="logo-text d-none d-sm-block">
							FIX
							<br />
							FOTO
							<br />
							STUDIO1
						</div>
						<div href="#start" className="logo-text d-block d-sm-none">
							FFS1
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-lg`}
						aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
						placement="end"
						className="bg-dark"
					>
						<Offcanvas.Header closeButton style={{ color: "white" }}>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
								Menü
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								{...[
									"Passfotos",
									"Bewerbungsbilder",
									"Portraits",
									"Fotoprodukte",
									"Rahmen",
									"Labor",
									"Videokassetten",
									"Glasfotos",
									"Kopien",
								].map((item, index) => navbarItem(item, index + 1))}
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
