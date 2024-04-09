import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href={"/events"}>
        <Button>Click me</Button>
      </Link>
    </main>
  );
}
