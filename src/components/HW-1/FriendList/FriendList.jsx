import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.item}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
