import style from "./ListFriend.module.css";
import Icon from "./FriendIcon";

function FriendList() {
  return (
    <div className={style.Content}>
      <div className={style.ContainerIcon}>
        <Icon />
      </div>
    </div>
  );
}

export default FriendList;