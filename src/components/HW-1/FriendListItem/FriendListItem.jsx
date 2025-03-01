import css from './FriendListItem.module.css';
const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div className={css.card}>
      <img className={css.img} src={avatar} alt="Avatar" width="64" />
      <p className={css.text}>{name}</p>
      <p
        style={{
          color: isOnline ? 'green' : 'red',
          marginBottom: 0,
          marginTop: 10,
        }}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
export default FriendListItem;
