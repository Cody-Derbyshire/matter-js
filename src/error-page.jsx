import {
  Link,
  Routes,
  Route,
  useNavigate,
  useRouteError,
} from 'react-router-dom';
import '../components/CSS/error-page.css';

export default function ErrorPage() {
  const error = useRouteError();

  const navigate = useNavigate();

  return (
    <>
      <div id='error-page' className='error-page'>
        <p>
          <i className='error-message'>
            {error.status}&nbsp;&rarr;&nbsp;
            {error.statusText}
          </i>
        </p>
        <p>sorry, an unexpected error has occurred.</p>

        <p className='back-link' onClick={() => navigate(-1)}>
          back
        </p>
      </div>
    </>
  );
}
