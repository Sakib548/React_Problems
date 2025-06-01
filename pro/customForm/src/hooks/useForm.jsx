import { useRef, useState } from "react";

const useForm = ({ initialValue, validate, onSubmit }) => {
  const [values, setValues] = useState(initialValue || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const validators = useRef({});

  const register = (name, validationRules = {}) => {
    // validators.current[name] = validationRules;

    return {
      name,
      value: values[name] || "",
      onChange: (e) => {
        const newValue = e.target.value;
        setValues((prev) => ({ ...prev, [name]: newValue }));
      },

      onBlur: () => {
        setTouched((prev) => ({ ...prev, [name]: true }));
      },
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const validationErrors = validate(values);
    const validationErrors = validateAll();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("H");
      onSubmit(values);
    }
  };

  return { register, values, touched, errors, handleSubmit };
};

export default useForm;
