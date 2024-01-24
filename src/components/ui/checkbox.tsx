import React from 'react';

interface CheckboxProps {
    id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id }) => {
    return (
        <div>
            <input type="checkbox" id={id} />
        </div>
    );
};

export default Checkbox;
