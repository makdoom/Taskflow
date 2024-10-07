"use client";

import { createBoard } from "@/actions/board";
import { CreateBoardSchema, CreateBoardType } from "@/actions/board/schema";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GRADIENTS } from "@/constants/gradients";
import { useAction } from "@/hooks/use-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLoader } from "react-icons/fi";
import { toast } from "sonner";
// import { FiLoader } from "react-icons/fi";

type CreateBoardProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateBoard = ({ isOpen, onClose }: CreateBoardProps) => {
  const pathname = usePathname();
  const [defaultBoardColorId, setDefaultBoardColorId] = useState(1);
  const form = useForm<CreateBoardType>({
    resolver: zodResolver(CreateBoardSchema),
    defaultValues: {
      title: "",
      gradientId: 1,
      workspaceId: "",
    },
  });
  const { execute, isLoading } = useAction(createBoard, {
    onSuccess: (data: CreateBoardType) => {
      console.log(data);
      toast.success("New board created");
      onClose();
    },
    onError: (error: string) => toast.error(error),
  });

  const submitHandler = async (data: CreateBoardType) => {
    const workspaceId = pathname.split("/").at(2);
    if (!workspaceId) return;

    execute({
      title: data.title,
      gradientId: defaultBoardColorId,
      workspaceId: workspaceId,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Board</DialogTitle>
          <DialogDescription className="hidden" />
        </DialogHeader>
        <div className="mt-4">
          <p className="text-muted-foreground mb-2 text-sm">
            Select board color
          </p>
          <div className="flex gap-2 justify-between">
            {Object.values(GRADIENTS).map((color, index) => (
              <div
                key={index}
                onClick={() => setDefaultBoardColorId(index + 1)}
                className={`size-12 rounded-md cursor-pointer ${color} ${
                  index + 1 == defaultBoardColorId
                    ? "border-2 border-primary"
                    : ""
                }`}
              />
            ))}
          </div>

          <Form {...form}>
            <form className="" onSubmit={form.handleSubmit(submitHandler)}>
              <div className="mt-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground">
                        Board Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="eg: Board-1"
                          type="text"
                          autoFocus
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage className="dark:text-red-400" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center justify-end w-full mt-10 gap-x-4">
                <Button variant="secondary" onClick={onClose}>
                  Cancel
                </Button>
                <Button>
                  {isLoading && (
                    <FiLoader className="animate-spin size-5 mr-2" />
                  )}
                  Create
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CreateBoard;
