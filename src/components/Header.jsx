import style from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';


export function Header() {
  return (
    <div className={style.header}>
      <img src={igniteLogo} alt="Logotipo ignite" />
    </div>
  );
}
