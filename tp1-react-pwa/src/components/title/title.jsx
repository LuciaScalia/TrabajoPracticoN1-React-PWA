import './styles.css';

const Title = ({titulo}) => {
  return (
    <div className="title-container">
      <h1 className="title">{titulo}</h1>
    </div>
  );
};

export default Title;