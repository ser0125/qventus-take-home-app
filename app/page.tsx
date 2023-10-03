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
    <main className="flex h-full w-full max-w-4xl items-center pt-4 flex-col">
      <h1 className="text-xl font-bold">Password Component</h1>
      <Password passwordReqs={passwordReqs} />
    </main>
  );
}
