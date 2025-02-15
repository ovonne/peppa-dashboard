import { Button } from "@/components/ui/button";

export default function InCharge() {
  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">Add Products</h2>
        <div className="flex gap-[1rem]">
          <Button className="rounded-[0.8rem]" variant={"destructive"}>
            <span>Cancel activity</span>
          </Button>
          <Button className="flex rounded-[0.8rem]">
            <span>Save and Publish</span>
          </Button>
        </div>
      </div>

      <div>{/* <InChargeTable></InChargeTable> */}</div>
    </div>
  );
}
