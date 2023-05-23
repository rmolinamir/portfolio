import { Input } from 'react-formalized';

export default function InputElements() {
  return (
    <>
      {/* Default input */}
      <Input
        validation={{
          required: true,
          minLength: 4,
          maxLength: 10
        }}
        placeholder="Username"
      />
      {/* Email input */}
      <Input
        type="email"
        validation={{
          minLength: 3
        }}
        placeholder="Email"
      />
      {/* Password input */}
      <Input
        type="password"
        validation={{
          required: true,
          minLength: 4,
          maxLength: 10
        }}
        placeholder="Password"
      />
      {/* Password input with show/hide password toggle */}
      <Input
        passwordHandler
        type="password"
        validation={{
          required: true,
          minLength: 4,
          maxLength: 10
        }}
        valueType="Password"
        placeholder="Password (with a show/hide toggle)"
      />
      {/* Text area inputs with max character lengths */}
      <Input
        type="textarea"
        placeholder="TextArea"
        elementConfig={{
          maxLength: 150
        }}
      />
      <Input
        type="textarea"
        placeholder="TextArea (2000 characters limit)"
        elementConfig={{
          maxLength: 2000
        }}
      />
      {/* Disabled text area inputs */}
      <Input
        disabled
        validation={{
          required: true,
          minLength: 4,
          maxLength: 10
        }}
        placeholder="Disabled"
      />
      <Input
        disabled
        type="textarea"
        placeholder="TextArea (Disabled)"
        elementConfig={{
          maxLength: 150
        }}
      />
    </>
  );
}
