import './styles.css';

const Button = ({texto, onClick}) => {
    return <button type="button" onClick={onClick}>{texto}</button>;
}

export default Button;