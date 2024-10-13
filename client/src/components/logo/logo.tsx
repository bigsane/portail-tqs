import './style.css'

/**
 * Logo component that displays the logo with three parts: tech_, quarte_, and services.
 * Each part is styled with specific CSS classes.
 *
 * @returns {JSX.Element} The JSX code for the logo component.
 */

const Logo = (): JSX.Element => (
    <div className='logo'>
        <span className='logo_tech'>T</span>
        <span className='logo_quartet'>Q</span>
        <span className='logo_service'>S</span>
    </div>
)

export default Logo
