import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "../App.css";
import { customer } from "../interfaces/custumer";
import customerInfo from "../data/Customer.json";
import { useNavigate } from "react-router-dom";
const validation = Yup.object().shape({
  username: Yup.string()
    .min(2, "to short!")
    .max(20, "to long!")
    .matches(/^[A-Za-z0-9\s]+$/, "Only English letters and numbers are allowed")
    .required("name is requierd"),
  password: Yup.string()
    .min(7, "weak!")
    .max(21, "to long!")
    .matches(/^[A-Za-z0-9\s]+$/, "Only English letters and numbers are allowed")
    .required("password is requierd"),
});

const Login = ({
  setIsAuthenticated,
  setUsername,
}: {
  setIsAuthenticated: (val: boolean) => void;
  setUsername: (val: string) => void;
}) => {
  const navigate = useNavigate();
  const handleLogin = (username: string, password: string) => {
    const customers: customer[] = customerInfo;
    let find: boolean = false;
    customers.map((user) =>
      user.userName === username && user.password === password
        ? (find = true)
        : find
    );

    if (find) {
      navigate(`/`);
      setIsAuthenticated(true);
      setUsername(username);

    } else {
      alert("faild! try again");
    }
  };
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validation}
      onSubmit={(values) => {
        handleLogin(values.username, values.password);
      }}
    >
      {({ values, validateForm,  resetForm }) => (
        <Form className="login-container">
          <div className="login-box">
            <div className="pt-3 d-flex flex-column w-75">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <Field
                name="username"
                placeholder="Enter your Username"
                className="form-control input-underline"
              />
            </div>
            <ErrorMessage
              name="username"
              component="div"
              className="text-danger mt-1"
            />

            <div className="pt-3 d-flex flex-column w-75">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                name="password"
                placeholder="Enter your password"
                className="form-control input-underline"
              />
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger mt-1"
            />

            <div className="pt-5 pb-2 d-flex justify-content-between gap-2">
              <button
                type="button"
                className="btn btn-purple"
                onClick={async () => {
                  const errors = await validateForm();
                  if (Object.keys(errors).length === 0) {
                    handleLogin(values.username, values.password);
                  } else {
                    alert("Please fill in all required fields correctly.");
                  }
                }}
              >
                Login
              </button>

              <button
                className="btn btn-purple"
                type="button"
                onClick={async () => {
                  const errors = await validateForm();
                  if (Object.keys(errors).length === 0) {
                    navigate("/login");
                    resetForm();
                  } else {
                    alert("Please fill in all required fields correctly.");
                  }
                }}
              >
                Register
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
