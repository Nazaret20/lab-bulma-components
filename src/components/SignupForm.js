import Navbar from "./Navbar";
import FormField from "./FormField";

function SignupForm() {
  return (
    <>
      <Navbar />

      <form>
        <FormField
          label={"Name"}
          type={"text"}
          placeholder={"e.g Alex Smith"}
        />

        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <FormField label={'Password'} type={'password'} placeholder={'********'} />

        <button className="button is-primary button-signup" type="submit">
            Signup
        </button>
      </form>
    </>
  );
}

export default SignupForm;
