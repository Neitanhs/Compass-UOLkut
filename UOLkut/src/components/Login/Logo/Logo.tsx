import styles from "./styles.module.css"
import LogoSVG from "../../../assets/svg/logo.svg"

export const Logo = () => {
  return (
    <div className={styles.Logo}>          
          <img src={LogoSVG} alt="Logo" />
        </div>
  )
}
