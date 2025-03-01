import { Link } from 'react-router-dom';
import css from './HW.module.css';

const HW = () => {
  return (
    <>
      <h2 className={css.title}>React 2.0</h2>
      <div className={css.container}>
        <Link className={css.button} to="/hw1">
          HW-1
        </Link>

        <Link className={css.button} to="/hw2">
          HW-2
        </Link>

        <button className={css.button}>HW-3</button>

        <button className={css.button}>HW-4</button>

        <button className={css.button}>HW-5</button>

        <button className={css.button}>HW-6</button>

        <button className={css.button}>HW-7</button>

        <button className={css.button}>HW-8</button>
      </div>
    </>
  );
};
export default HW;
