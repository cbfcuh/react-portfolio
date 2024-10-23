import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Wrong page!</h1>
      <p>Sorry, you seem to have stumbled onto the wrong page.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}