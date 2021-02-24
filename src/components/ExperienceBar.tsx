<<<<<<< HEAD
import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  return (
    <header className={ styles.experienceBar }>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }}/>

        <span className={ styles.currentExperience } style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
=======
export function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span>0px</span>
      <div>
        <div style={{ width: '50%' }}/>

        <span className="currenct-experience" style={{ left: '50%' }}>
          300xp
        </span>
      </div>
      <span>600px</span>
>>>>>>> 1ce9644afe0b1afc378901da3ec36ef33d80d5bc
    </header>
  );
}