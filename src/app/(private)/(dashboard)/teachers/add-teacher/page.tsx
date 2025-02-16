import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, CloudUpload, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AddTeacher() {
  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">Add Teacher</h2>
        <div className="flex gap-[1rem]">
          <Link href={"/teachers"}>
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
          <div className="flex gap-[5rem]">
            <div className="flex max-w-[40rem] flex-col gap-[2.4rem]">
              <Input
                className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                placeholder="First name"
              ></Input>

              <Input
                className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                placeholder="Last name"
              ></Input>

              <Input
                className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                placeholder="Email Address"
              ></Input>

              <Input
                className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                placeholder="Phone Number"
              ></Input>

              <Input
                className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                placeholder="Location"
              ></Input>

              <div className="flex gap-[1rem]">
                <Input
                  itemType="number"
                  className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                  placeholder="Price per hour"
                ></Input>
                <Input
                  itemType="number"
                  className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                  placeholder="Level of teaching"
                ></Input>
              </div>
            </div>
            <div className="space-y-[2rem]">
              <div className="flex h-[30rem] w-[37rem] items-center justify-center rounded-[1.2rem] border border-stroke bg-lightGray">
                <div className="text-center">
                  <ImageIcon
                    size={64}
                    className="m-auto text-highlighted"
                  ></ImageIcon>
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
              <div>
                <Textarea
                  className="h-[16rem] rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                  placeholder="Teacher description"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] space-y-[2.8rem] rounded-[1.2rem] bg-white px-[3rem] py-[3.1rem]">
          <h2 className="text-center text-[1.6rem] font-medium">Previews</h2>
          <div className="rounded-[1.2rem] shadow-lg shadow-lightGray">
            <div className="relative h-[24rem] w-full overflow-hidden">
              <Image
                fill
                src={"/teacher.jpg"}
                alt="teacher image"
                className="rounded-[1.2rem] object-cover"
              ></Image>
            </div>
            <div className="px-[1rem] py-[1.5rem]">
              <div className="flex justify-between">
                <p className="text-[1.4rem] font-bold">Antonio Gabriel</p>
                <p className="text-[1.4rem] font-medium text-highlighted">
                  KZ5,000 <span className="text-[1rem] text-Gray">/hora</span>
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[1.4rem] text-Gray">license</p>
                <p></p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[1.8rem] font-medium">About Me</h2>
            <p className="text-[1.2rem] text-Gray">
              Degree in Pedagogy, graduated in Angola. He stands out for his
              experience in education, with more than 5 years of experience in
              education
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-[1.8rem] font-medium">to schedule</h2>
              <Calendar size={20}></Calendar>
            </div>
            <div className="mt-[2rem] flex justify-between">
              <div className="p-[1.2rem]">
                <p className="text-[1.4rem] text-Gray">seg</p>
                <h2 className="text-[2rem] font-bold">23</h2>
              </div>
              <div className="p-[1.2rem]">
                <p className="text-[1.4rem] text-Gray">ter</p>
                <h2 className="text-[2rem] font-bold">24</h2>
              </div>
              <div className="p-[1.2rem]">
                <p className="text-[1.4rem] text-Gray">Qua</p>
                <h2 className="text-[2rem] font-bold">25</h2>
              </div>
              <div className="rounded-[0.8rem] bg-highlighted p-[1.2rem] text-white">
                <p className="text-[1.4rem]">Qui</p>
                <h2 className="text-[2rem] font-bold">26</h2>
              </div>
              <div className="p-[1.2rem]">
                <p className="text-[1.4rem] text-Gray">Sex</p>
                <h2 className="text-[2rem] font-bold">27</h2>
              </div>
              <div className="p-[1.2rem]">
                <p className="text-[1.4rem] text-Gray">Dom</p>
                <h2 className="text-[2rem] font-bold">22</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
