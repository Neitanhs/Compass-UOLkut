import style from "./ListCommunity.module.css";
import Icon from "./CommunityIcon";

function List() {
  return (
    <div className={style.Content}>
      <div className={style.ContainerIcon}>
        <Icon />
      </div>
    </div>
  );
}
export default List;