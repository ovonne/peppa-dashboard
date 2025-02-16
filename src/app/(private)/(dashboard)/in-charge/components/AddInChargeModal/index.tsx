"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, Plus } from "lucide-react";
import toast from "react-hot-toast";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { inChargeService } from "@/services/InChargeService";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(1, "Location is required"),
});

export function AddInChargeModal() {
  const [isLoading, setIsLoading] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      await inChargeService.create(data);
      toast.success("Add In Charge");
    } catch (error) {
      toast.error("Add In Charge");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-[1rem] rounded-[0.8rem]">
          <Plus className="!size-[2rem]" />
          Add In Charge
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-[1.4rem] sm:max-w-[42.3rem]">
        <DialogHeader>
          <DialogTitle className="text-[2rem] font-medium text-black">
            Add In Charge
          </DialogTitle>
        </DialogHeader>
        <p className="my-[2.8rem] text-[1.6rem] font-medium text-Gray">
          Details of the in Charge
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[2.4rem]"
        >
          <div>
            <Input
              {...register("name")}
              className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
              placeholder="In charge name"
            />
            {errors.name && (
              <p className="text-[1.2rem] text-medRed">
                {String(errors.name.message)}
              </p>
            )}
          </div>
          <div>
            <Input
              {...register("email")}
              className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
              placeholder="In charge email"
            />
            {errors.email && (
              <p className="text-[1.2rem] text-medRed">
                {String(errors.email.message)}
              </p>
            )}
          </div>
          <div>
            <Input
              {...register("location")}
              className="rounded-[0.8rem] border-none bg-lightGray p-[1.6rem] !text-[1.4rem] font-medium"
              placeholder="In charge location"
            />
            {errors.location && (
              <p className="text-[1.2rem] text-medRed">
                {String(errors.location.message)}
              </p>
            )}
          </div>

          <DialogFooter className="mt-[4.4rem] flex h-[5rem]">
            <Button
              className="w-[100%] border-2 border-highlighted font-bold text-highlighted hover:bg-highlighted/5 hover:text-highlighted"
              type="button"
              variant={"outline"}
            >
              Cancel
            </Button>
            <Button className="w-[100%] font-bold" type="submit">
              {isLoading ? (
                <LoaderCircle
                  className="!size-[2rem] h-[2.4rem] w-[2.4rem] animate-spin text-white"
                  strokeWidth={2}
                  size={20}
                />
              ) : (
                " Add "
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
