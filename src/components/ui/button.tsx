import React from 'react';

interface ButtonProps {
    name: string;
    style?: string;
}

const Button: React.FC<ButtonProps> = ({ name, style }) => {
    return (
        <button
            className={style}
        >
            {name}
        </button>
    );
};

export default Button;
