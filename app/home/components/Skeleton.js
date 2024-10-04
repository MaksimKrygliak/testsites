import React from "react";
import {Card, Skeleton} from "@nextui-org/react";

export default function Skeleton_our_instructors() {
  return (
    <Card className="w-[200px] space-y-5 p-4" radius="lg">
      <Skeleton className="flex items-center justify-center rounded-full w-30 h-30 bg-default-300">
        {/* Тут пустой div не нужен, так как Skeleton сам обеспечивает отображение скелета */}
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-full rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-full rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-full rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
