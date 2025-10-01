import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { customer } from "../interfaces/custumer";
import customerInfo from "../data/Customer.json";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const validation = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too short!")
    .max(20, "Too long!")
    .matches(/^[A-Za-z0-9\s]+$/, "Only English letters and numbers are allowed")
    .required("Username is required"),
  password: Yup.string()
    .min(7, "Weak!")
    .max(21, "Too long!")
    .matches(/^[A-Za-z0-9\s]+$/, "Only English letters and numbers are allowed")
    .required("Password is required"),
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
    const find = customers.some(
      (user) => user.userName === username && user.password === password
    );

    if (find) {
      setIsAuthenticated(true);
      setUsername(username);
      navigate("/");
    } else {
      alert("Failed! Try again.");
    }
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validation}
      onSubmit={(values) => handleLogin(values.username, values.password)}
    >
      {({ values, validateForm, resetForm }) => (
        <Form>
          <Box
            sx={{
              minHeight: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url("/images/background.jpeg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Paper
              elevation={5}
              sx={{
                width: { xs: "90%", sm: "25%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 4,
                borderRadius: "1rem",
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 1)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              <Field name="username">
                {({ field, meta }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Username"
                    placeholder="Enter your username"
                    variant="outlined"
                    margin="dense"
                    sx={{ mb: 2 }}
                    InputLabelProps={{ style: { color: "#fff" } }}
                    InputProps={{
                      style: { color: "#fff" },
                    }}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error ? meta.error : ""}
                  />
                )}
              </Field>

              <Field name="password">
                {({ field, meta }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    variant="outlined"
                    margin="dense"
                    sx={{ mb: 2 }}
                    InputLabelProps={{ style: { color: "#fff" } }}
                    InputProps={{
                      style: { color: "#fff" },
                    }}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error ? meta.error : ""}
                  />
                )}
              </Field>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  mt: 3,
                  gap: 2,
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
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
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
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
                </Button>
              </Box>
            </Paper>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
