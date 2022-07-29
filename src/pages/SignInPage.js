import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import AuthenticationLayout from "../layout/AuthenticationLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "../components/Icons/IconEyeToggle";
import useToggleValue from "../hooks/useToggleValue";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter email address"),
  password: yup
    .string()
    .required("Please enter password")
    .min(8, "Password must be 8 character "),
});
const SignInPage = () => {
  const navigate = useNavigate();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (values) => {
    console.log(values);
  };
  const handleLogin = (response) => {
    localStorage.setItem("token", response.tokenId);
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    navigate("/student");
    window.location.reload(false);
  };
  const handleFailure = (response) => {
    alert(response);
  };
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "625384490128-gc6s2ejbn2q14tcjdslm5kaq7ktqp6oj.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });
  return (
    <AuthenticationLayout>
      <div className="absolute bg-white p-6 sm:p-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-sm flex flex-col gap-y-4 items-center min-w-[350px] sm:min-w-[555px]">
        <span className="text-2xl font-semibold">Welcome Back!</span>
        <div className="gap-x-2 flex items-center">
          <span className="text-[#808191]">Dont have an account?</span>
          <NavLink to={"/sign-up"} className="text-secondary underline">
            Sign up
          </NavLink>
        </div>
        <GoogleLogin
          clientId="625384490128-gc6s2ejbn2q14tcjdslm5kaq7ktqp6oj.apps.googleusercontent.com"
          buttonText="Sign in with google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
          className="google"
        ></GoogleLogin>
        {/* <div className="button w-full flex items-center py-3 justify-center gap-x-2 bg-white border-border1">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.3055 10.0415L21.5 10.0415L21.5 10L12.5 10L12.5 14L18.1515 14C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
              fill="#FBC02D"
            />
            <path
              d="M3.65332 7.3455L6.93882 9.755C7.82782 7.554 9.98082 6 12.5003 6C14.0298 6 15.4213 6.577 16.4808 7.5195L19.3093 4.691C17.5233 3.0265 15.1343 2 12.5003 2C8.65932 2 5.32832 4.1685 3.65332 7.3455Z"
              fill="#E53935"
            />
            <path
              d="M12.5002 22C15.0832 22 17.4302 21.0115 19.2047 19.404L16.1097 16.785C15.1057 17.5455 13.8577 18 12.5002 18C9.89916 18 7.69066 16.3415 6.85866 14.027L3.59766 16.5395C5.25266 19.778 8.61366 22 12.5002 22Z"
              fill="#4CAF50"
            />
            <path
              d="M22.3055 10.0415L22.2975 10L21.5 10L12.5 10L12.5 14L18.1515 14C17.7555 15.1185 17.036 16.083 16.108 16.7855C16.1085 16.785 16.109 16.785 16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
              fill="#1565C0"
            />
          </svg>
          <span className="text-text1">Sign up with google</span>
        </div> */}
        <form
          className="w-full flex flex-col gap-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col gap-y-3">
            <label htmlFor="email" className="text-sm text-text1">
              Email *
            </label>
            <Input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              register={{ ...register("email") }}
              errors={errors.email?.message}
            ></Input>
          </div>
          <div className="w-full flex flex-col gap-y-3">
            <label htmlFor="password" className="text-sm text-text1">
              Password *
            </label>
            <Input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Enter password"
              id="password"
              register={{ ...register("password") }}
              errors={errors.password?.message}
              className={"pr-10"}
            >
              <div className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 cursor-pointer">
                <IconEyeToggle
                  open={showPassword}
                  onClick={handleTogglePassword}
                ></IconEyeToggle>
              </div>
            </Input>
          </div>
          <span className="text-secondary w-full text-end cursor-pointer">
            Forgot password
          </span>
          <Button className="w-full border-primary py-3">Sign in</Button>
        </form>
      </div>
    </AuthenticationLayout>
  );
};

export default SignInPage;
