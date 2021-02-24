import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={ styles.profileContainer }>
      <img src="http://github.com/goytten.png" alt="Logo do perfil" />
      <div>
        <strong>João Pedro</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}