import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import UserContext from '../lib/userContext';
import Router from 'next/router';

import Cookies from 'js-cookie';
import { useContext } from 'react';

function MyNavbar() {

  const [, setUserContext] = useContext(UserContext);

  function onLogout() {
    Cookies.set('jwt', '');
    setUserContext(undefined);
    Router.push('/login');
  }

  return <Navbar>
    <Link href="/index" passHref>
      <Navbar.Brand href="/">Next JS Bootstrap</Navbar.Brand>
    </Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <UserContext.Consumer >
        {([userContext,]) => {
          if (userContext) {
            return <Nav>
              <Navbar.Text>
                Signed in as: {userContext.username}
              </Navbar.Text>
              <Nav.Link onClick={onLogout}>Logout</Nav.Link>
            </Nav>
          }

          return <Nav>
            <Link href="/login" passHref>
              <Nav.Link>Login</Nav.Link>
            </Link>
          </Nav>
        }}

      </UserContext.Consumer>
    </Navbar.Collapse>
  </Navbar>;
}

export default MyNavbar;