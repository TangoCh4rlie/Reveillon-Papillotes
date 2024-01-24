interface InputFieldProps {
    id: string;
    type: string;
    placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, type, placeholder }) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
    );
};

export default InputField;