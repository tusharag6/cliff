import React from "react";
import RecentWinner from "../../../components/recent-winner";
import { Search } from "lucide-react";
import { Input } from "@repo/ui/components/ui/input";

const PreviousWinnersPage = () => {
  return (
    <div className="container">
      <h1 className="text-lg font-semibold md:text-2xl">
        Recent Event Winners
      </h1>
      <RecentWinner />
      <div className="mt-8">
        <h1 className="text-lg font-semibold md:text-2xl">
          Previous Event Winners
        </h1>
        <div className="relative mt-2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search events..."
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviousWinnersPage;
