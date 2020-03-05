import MyNavbar from '../components/MyNavbar';
import UserContext from '../lib/userContext';
import Dashboard from '../components/Dashboard';
import Landing from '../components/Landing';

export default function Index() {

  return (
    <>
      <MyNavbar></MyNavbar>

      <UserContext.Consumer >
        {([userContext,]) => {
          if (!userContext) {
            return <Landing />
          }

          return <Dashboard />;
        }}
      </UserContext.Consumer>
    </>
  );
}