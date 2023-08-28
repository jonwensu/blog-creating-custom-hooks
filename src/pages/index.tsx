import { Button } from "@app/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <h2 className="text-2xl">Links:</h2>
      <Link href="/counter">
        <Button>Counter</Button>
      </Link>
      <Link href="/scoreboard">
        <Button>Scoreboard</Button>
      </Link>
    </main>
  );
}
