import './style.css';


/**
 * Logo component that displays the logo with three parts: Tech_, Quarte_, and Services.
 * Each part is styled with specific CSS classes.
 *
 * @returns {JSX.Element} The JSX code for the logo component.
 */

const Logo = (): JSX.Element => (
  <div className="logo">
    <span className="Tech_">T</span>
    <span className="Quarte_">Q</span>
    <span className="Services">S</span>
  </div>
);

export default Logo;