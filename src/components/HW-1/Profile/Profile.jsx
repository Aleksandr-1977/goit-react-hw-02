import css from './Profile.module.css';
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img src={image} alt="User avatar" className={css.img} />
        <p className={css.title}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listitem}>
          <span>Followers</span>
          <span className={css.likes}>{followers}</span>
        </li>
        <li className={css.listitem}>
          <span>Views</span>
          <span className={css.likes}>{views}</span>
        </li>
        <li className={css.listitem}>
          <span>Likes</span>
          <span className={css.likes}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
