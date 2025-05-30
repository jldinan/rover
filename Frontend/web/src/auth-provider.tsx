import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

type Auth0ProviderWithNavigateProps = {
  children: ReactNode;
};

export const Auth0ProviderWithNavigate = ({ children }: Auth0ProviderWithNavigateProps) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = "http://localhost:5173";

  const onRedirectCallback = (appState?: { returnTo?: string }) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!domain || !clientId || !redirectUri) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}