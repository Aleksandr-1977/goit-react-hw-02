import css from './back.module.css';
import { Link } from 'react-router-dom';

const Back = () => {
  return (
    <Link className={css.back} to="/hw">
      Back
    </Link>
  );
};
export default Back;
