import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CloudUpload, Image } from "lucide-react";
import Link from "next/link";

export default function InCharge() {
  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">Add Products</h2>
        <div className="flex gap-[1rem]">
          <Link href={"/products"}>
            <Button className="rounded-[0.8rem]" variant={"destructive"}>
              <span>Cancel activity</span>
            </Button>
          </Link>
          <Button className="flex rounded-[0.8rem]">
            <span>Save and Publish</span>
          </Button>
        </div>
      </div>

      <div className="flex gap-[2rem]">
        <div className="rounded-[1.2rem] bg-white px-[4.2rem] py-[3.1rem]">
          <p className="mb-[2.9rem] text-[1.6rem] font-medium text-Gray">
            Product Information
          </p>
          <div className="flex gap-[5rem]">
            <div className="flex max-w-[40rem] flex-col gap-[2.4rem]">
              <Input
                className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                placeholder="Product name"
              ></Input>

              <Textarea
                className="h-[16rem] rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                placeholder="Type your message here."
              />
              <Input
                className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                placeholder="Product Category"
              ></Input>

              <div className="flex gap-[1rem]">
                <Input
                  itemType="number"
                  className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                  placeholder="Sale Price"
                ></Input>
                <Input
                  itemType="number"
                  className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                  placeholder="Cost Price"
                ></Input>
              </div>

              <Input
                className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                placeholder="Stock Quantity"
              ></Input>

              <Select>
                <SelectTrigger className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium">
                  <SelectValue placeholder="Product Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex h-[30rem] w-[37rem] items-center justify-center rounded-[1.2rem] border border-stroke bg-lightGray">
              <div className="text-center">
                <Image size={64} className="m-auto text-highlighted"></Image>
                <div className="mb-[1.3rem] mt-[2.4rem] flex justify-center gap-[0.8rem] font-medium text-highlighted">
                  <CloudUpload></CloudUpload>
                  <p className="text-[1.6rem]">Import Image</p>
                </div>
                <p className="text-[1.4rem] text-Gray">
                  Load an image to your product
                </p>
                <p className="text-[1.4rem] text-Gray">
                  JPEG format, PNG Size 600x600 (1: 1)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] rounded-[1.2rem] bg-white px-[4.2rem] py-[3.1rem]">
          <h2 className="text-[1.6rem] font-medium">Details</h2>
        </div>
      </div>
    </div>
  );
}
