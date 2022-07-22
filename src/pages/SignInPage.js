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
// import { GoogleLogin } from "react-google-login";
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter your email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});
const SignInPage = () => {
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
  // const responseGoogle = (response) => {
  //   console.log(response);
  // };
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
        {/* <GoogleLogin
          clientId="625384490128-4aot6544rknr239qruhubhue149eo7g6.apps.googleusercontent.com"
          buttonText="Sign in with google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="google"
        ></GoogleLogin> */}
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
