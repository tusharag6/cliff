import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <main>
      <Button asChild variant="outline">
        <Link href="/login">Login</Link>
      </Button>
    </main>
  );
}
