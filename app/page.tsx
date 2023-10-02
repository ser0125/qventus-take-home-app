import Password from "./components/Password/Password";

export default function Home() {
  const passwordReqs = [
    {
      id: 0,
      label: "Has a number 0-9",
      validation: "has-number",
    },
    {
      id: 1,
      label: "Has a special char !@#$%^&*",
      validation: "has-special-char",
    },
    {
      id: 2,
      label: "Has uppercase Letter",
      validation: "has-uppercase-letter",
    },
    {
      id: 3,
      label: "No consecutive letters",
      validation: "no-consecutive-letters",
    },
  ];
  return (
    <>
      <h1>Password Component</h1>
      <Password passwordReqs={passwordReqs} />
    </>
  );
}
