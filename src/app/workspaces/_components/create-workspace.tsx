import { createWorkspace, editWorkspace } from "@/actions/workspace";
import {
  CreateWorkspaceSchema,
  CreateWorspaceType,
  EditWorkspaceType,
} from "@/actions/workspace/schema";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { Textarea } from "@/components/ui/textarea";
import { generateRandomGradient, GRADIENTS } from "@/constants/gradients";
import { useAction } from "@/hooks/use-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { Workspace } from "@prisma/client";
import { useForm } from "react-hook-form";
import { FiLoader } from "react-icons/fi";
import { toast } from "sonner";

type CreateWorkspaceProp = {
  mode: "EDIT" | "NEW";
  isOpen: boolean;
  workspace?: Workspace;

  onClose: () => void;
  getWorkspaceInfo?: () => void;
};

const CreateWorkspace = ({
  mode = "NEW",
  isOpen,
  onClose,
  workspace,
  getWorkspaceInfo,
}: CreateWorkspaceProp) => {
  const form = useForm<CreateWorspaceType>({
    resolver: zodResolver(CreateWorkspaceSchema),
    defaultValues:
      mode == "EDIT" && workspace
        ? {
            name: workspace?.name,
            website: workspace?.website ?? "",
            description: workspace?.description ?? "",
            gradientId: workspace?.gradientId,
          }
        : {
            name: "",
            website: "",
            description: "",
            gradientId: generateRandomGradient(),
          },
  });

  const { execute, isLoading } = useAction(createWorkspace, {
    onSuccess: (data) => {
      console.log("successfull", data);
      toast.success("Workspace created successfully");
      onClose();
    },
    onError: (error) => {
      console.log(error);
      toast.error(error);
    },
  });

  const { execute: editWorkspaceExecute, isLoading: editModeLoading } =
    useAction(editWorkspace, {
      onSuccess: (data) => {
        console.log("successfull", data);
        toast.success("Workspace updated successfully");
        getWorkspaceInfo?.();
        onClose();
      },
      onError: (error) => {
        console.log(error);
        toast.error(error);
      },
    });

  const handleSubmit = async (data: CreateWorspaceType) => {
    if (mode === "NEW") {
      execute(data);
    } else if (workspace?.id) {
      const updatedData: EditWorkspaceType = { ...data, id: workspace?.id };
      editWorkspaceExecute(updatedData);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "NEW" ? "Create New" : "Update"} Workspace
          </DialogTitle>
          <DialogDescription className="hidden" />
        </DialogHeader>
        <div className="mt-4">
          <Form {...form}>
            <form className="" onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="flex items-center justify-center">
                <Avatar className="size-20 sm:size-24 rounded-xl">
                  <AvatarFallback
                    className={`text-4xl sm:text-5xl font-medium text-white rounded-xl ${
                      GRADIENTS[form?.control?._defaultValues?.gradientId || 1]
                    }`}
                  >
                    {mode === "EDIT" && workspace
                      ? `${workspace.name[0]?.toUpperCase()}`
                      : "W"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="grid grid-cols-2 gap-x-4 mt-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground">
                        Workspace Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="eg: Workspace-1"
                          type="text"
                          autoFocus
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage className="dark:text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-xs">
                        Website (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="https://www.workspace.com"
                          type="text"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full mt-4">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground">
                        Description (Optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="About workspace"
                          rows={5}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center justify-end w-full mt-6 gap-x-4">
                <Button variant="secondary" onClick={onClose}>
                  Cancel
                </Button>
                <Button>
                  {isLoading ||
                    (editModeLoading && (
                      <FiLoader className="animate-spin size-5 mr-2" />
                    ))}
                  {mode === "EDIT" ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CreateWorkspace;
