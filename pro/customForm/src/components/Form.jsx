import useForm from "../hooks/useForm";

const Form = () => {
  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  const form = useForm({
    initialValue,
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Name is required";
      if (!values.email) errors.email = "Email is required";
      if (!values.password) errors.password = "Password is required";
      if (!values.confirmpassword)
        errors.confirmpassword = "Enter your password again";
      if (values.confirmpassword !== values.password)
        errors.confirmpassword = "Please enter the same password";
      return errors;
    },
    onSubmit: (values) => {
      console.log("Form submitted", values);
    },
  });
  return (
    <form onSubmit={form.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" {...form.register("name")} />
        {form.touched.name && form.errors.name && <p>{form.errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          {...form.register("email")}
        />
        {form.touched.email && form.errors.email && <p>{form.errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          {...form.register("password")}
        />
        {form.touched.password && form.errors.password && (
          <p>{form.errors.password}</p>
        )}
      </div>
      <div>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          {...form.register("confirmpassword")}
        />
        {form.touched.confirmpassword && form.errors.confirmpassword && (
          <p>{form.errors.confirmpassword}</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
