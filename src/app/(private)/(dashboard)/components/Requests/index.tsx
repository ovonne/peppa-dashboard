import { Badge } from "@/components/ui/badge";
import { RequestItems } from "@/store/Requests/RequestsStore";
import Image from "next/image";

function RecentRequestsHeader() {
  return (
    <div>
      <h1 className="text-[1.6rem] font-medium">Recent requests</h1>
    </div>
  );
}

interface RequestItemProps {
  image: string;
  name: string;
  price: string;
  date: string;
  status: string;
}

function RequestItem({ image, name, price, date, status }: RequestItemProps) {
  return (
    <div className="flex justify-between border-b border-lightGray pb-[1.2rem]">
      <div className="flex gap-[1.4rem]">
        <div className="relative h-[4.9rem] w-[4.9rem] overflow-hidden rounded-[1.2rem] bg-lightGray">
          <Image
            src={image}
            alt={"Image of: " + name}
            fill
            className="rounded-[1.2rem] object-cover"
          />
        </div>
        <div className="space-y-[0.6rem]">
          <p className="text-[1.4rem]">{name}</p>
          <h3 className="text-[1.4rem] font-medium">KZ {price}</h3>
        </div>
      </div>
      <div className="space-y-[0.6rem]">
        <p className="text-[1.4rem] text-mineGray">{date}</p>
        {status === "Pending" ? (
          <Badge variant="destructive">Pending</Badge>
        ) : (
          <Badge variant="default">Completed</Badge>
        )}
      </div>
    </div>
  );
}

export function RecentRequests() {
  return (
    <div className="flex-1 rounded-[1.2rem] bg-white p-[2rem]">
      <RecentRequestsHeader />
      <div className="mt-[2.3rem] space-y-[1rem]">
        {RequestItems.map((requestItem, index) => (
          <RequestItem key={index} {...requestItem} />
        ))}
      </div>
    </div>
  );
}
