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
    <div className="flex justify-between pb-[1.2rem] border-b border-lightGray">
      <div className="flex gap-[1.4rem]">
        <div className="w-[4.9rem] h-[4.9rem] bg-lightGray rounded-[1.2rem] overflow-hidden relative">
          <Image
            src={image}
            alt={"Image of: " + name}
            fill
            className="object-cover rounded-[1.2rem]"
          />
        </div>
        <div className="space-y-[0.6rem]">
          <p className="text-[1.4rem]">{name}</p>
          <h3 className="text-[1.4rem] font-medium">KZ {price}</h3>
        </div>
      </div>
      <div className="space-y-[0.6rem]">
        <p className="text-mineGray text-[1.4rem]">{date}</p>
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
    <div className="bg-white rounded-[1.2rem] p-[2rem] min-w-[60rem]">
      <RecentRequestsHeader />
      <div className="mt-[2.3rem] space-y-[1rem]">
        {RequestItems.map((requestItem, index) => (
          <RequestItem key={index} {...requestItem} />
        ))}
      </div>
    </div>
  );
}
