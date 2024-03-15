import React, { useState } from "react";
import { Button, Input, Form, FormRowVertical, SpinnerMini } from "../../ui";
import useLogin from "./useLogin";
import { useForm } from "react-hook-form";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmitForm(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password }, {
      onSettled: () => {
        setEmail("");
        setPassword("");
      }
    })
  }

  function handleGuestLogin() {
    // Implementing guest login functionality here
    login({ email: "guest.user@email.com", password: "guestpwd123#" });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <FormRowVertical label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          {...register("email", { required: 'This field is required!' })}
        />
      </FormRowVertical>
      <FormRowVertical label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          {...register("password", { required: 'This field is required!' })}
        />
      </FormRowVertical>
      <div>
        {!isLoading ? (
          <>
            <Button size="lg" disabled={isLoading}>
              Log in
            </Button>

            <Button size="lg" variation="text" onClick={handleGuestLogin} disabled={isLoading}>
              Log in as guest
            </Button>
          </>
        )
          : <SpinnerMini style={{textAlign: "center"}} />
        }
      </div>
    </Form>
  );
}

export default LoginForm;
