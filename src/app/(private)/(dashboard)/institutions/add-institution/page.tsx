"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { teacherService } from "@/services/TeacherService";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUpload, Image as ImageIcon, LoaderCircle } from "lucide-react";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";

import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(3, "Subject is too short"),
  location: z.string().min(2, "Location is too short"),
  daily: z.string().min(1, "This field is required"),
  education_level: z.string().min(2, "Invalid education level"),
  contact: z.string().min(2, "Contact must be a valid number"),
  status: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

export default function AddInstitutions() {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      location: "",
      daily: "",
      education_level: "",
      contact: "",
      status: true,
    },
  });

  const [description, setDescription] = useState(
    "Degree in Pedagogy, graduated in Angola.",
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("subject", data.subject);
      formData.append("location", data.location);
      formData.append("daily", data.daily);
      formData.append("education_level", data.education_level);
      formData.append("contact", data.contact);
      formData.append("status", String(data.status));
      formData.append("about", description);

      formData.append(
        "schedules",
        JSON.stringify([[{ start: "12:00", end: "13:00" }]]),
      );

      if (image) {
        formData.append("avatar", image);
      }

      await teacherService.create(formData);

      toast.success("Teacher created successfully");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">Add Teacher</h2>
        <div className="flex gap-[1rem]">
          <Link href={"/institutions"}>
            <Button className="rounded-[0.8rem]" variant={"destructive"}>
              <span>Cancel activity</span>
            </Button>
          </Link>
          <Button className="flex rounded-[0.8rem]">
            <span>Save and Publish</span>
          </Button>
        </div>
      </div>

      <div className="">
        <div className="rounded-[1.2rem] bg-white px-[4.2rem] py-[3.1rem]">
          <div className="flex gap-[5rem]">
            <div className="flex max-w-[40rem] flex-col gap-[2.4rem]">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-[2.2rem]"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                            placeholder="First name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                            placeholder="Email"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                            placeholder="Subject"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                            placeholder="Location"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="education_level"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                            placeholder="Education Level"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                            placeholder="Contact"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-[2rem]">
                    <FormField
                      control={form.control}
                      name="daily"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                              placeholder="Daily"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={(value) =>
                                field.onChange(value === "true")
                              }
                              defaultValue={String(field.value)}
                            >
                              <SelectTrigger className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium">
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="true">Active</SelectItem>
                                <SelectItem value="false">Inactive</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="py-[3rem]">
                    <Button
                      type="submit"
                      className="w-full rounded-[0.8rem] p-[1rem]"
                    >
                      {isLoading ? (
                        <LoaderCircle
                          className="!size-[2rem] h-[2.4rem] w-[2.4rem] animate-spin text-white"
                          strokeWidth={2}
                          size={20}
                        />
                      ) : (
                        " Save Info"
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            <div className="space-y-[2rem]">
              <div className="relative flex h-[30rem] w-[37rem] items-center justify-center rounded-[1.2rem] border border-stroke bg-lightGray">
                {preview ? (
                  <div>
                    <div className="mb-[1.3rem] mt-[2.4rem] flex justify-center gap-[0.8rem] font-medium text-highlighted">
                      <ImageIcon
                        size={64}
                        className="m-auto text-highlighted"
                      />
                    </div>
                    <p className="text-[1.6rem] font-medium text-highlighted">
                      File selected
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <ImageIcon size={64} className="m-auto text-highlighted" />
                    <div className="mb-[1.3rem] mt-[2.4rem] flex justify-center gap-[0.8rem] font-medium text-highlighted">
                      <CloudUpload />
                      <p className="text-[1.6rem]">Import Image</p>
                    </div>
                    <p className="text-[1.4rem] text-Gray">
                      Load an image to your profile
                    </p>
                    <p className="text-[1.4rem] text-Gray">
                      JPEG, PNG - 600x600
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 cursor-pointer opacity-0"
                  onChange={handleImageChange}
                />
              </div>

              <div>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-[16rem] rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
                  placeholder="Teacher description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
