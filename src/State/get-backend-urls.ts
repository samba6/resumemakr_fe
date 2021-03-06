const URL_SOCKET = "/socket";

export const getBackendUrls = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  if (!apiUrl) {
    throw new Error(
      'You must set the "REACT_APP_API_URL" environment variable'
    );
  }

  const url = new URL(apiUrl);

  return {
    apiUrl: url.href,
    websocketUrl: new URL(URL_SOCKET, url.origin).href.replace("http", "ws"),
    root: url.origin
  };
};

export default getBackendUrls;
