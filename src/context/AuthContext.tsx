import { useAuth0 } from "@auth0/auth0-react";

function AuthGuard() {
  const {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect,
    logout: auth0Logout,
    user,
  } = useAuth0();

  const signup = () =>
    loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
    });

  const logout = () =>
    auth0Logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!isAuthenticated) {
    return (
      <>
        <button onClick={signup}>Signup</button>
        <button onClick={() => loginWithRedirect()}>Login</button>
      </>
    );
  }

  return (
    <>
      <p>Logged in as {user?.email || "User"}</p>

      <h1>User Profile</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button onClick={logout}>Logout</button>
    </>
  );
}

export default AuthGuard;
