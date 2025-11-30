import "./Button.css"; // Optional: for styling

const Button = ({ children, onClick, variant = "primary", ...props }) => {
    return (
        <button
            className={`button ${variant}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
