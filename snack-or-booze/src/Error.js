import './Error.css';

// DEFINED ALL LOGIC IN THIS FILE.
const Error = ({msg}) => {

  return (
    <div className="Error">
        <p>{msg}</p>
    </div>
  );
}

export default Error;
