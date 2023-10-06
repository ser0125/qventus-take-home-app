import Password from "./components/Password/Password";
import { passwordReqs } from "./constants/req-example";

export default function Home() {
  return (
    <main className="flex h-full w-full max-w-4xl items-center pt-4 flex-col">
      <h1 className="text-xl font-bold">Password Component</h1>
      <Password passwordReqs={passwordReqs} />
    </main>
  );
}
