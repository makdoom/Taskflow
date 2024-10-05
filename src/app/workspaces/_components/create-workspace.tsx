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
import { CreateWorkspaceSchema, CreateWorspaceType } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type CreateWorkspaceProp = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateWorkspace = ({ isOpen, onClose }: CreateWorkspaceProp) => {
  const form = useForm<CreateWorspaceType>({
    resolver: zodResolver(CreateWorkspaceSchema),
    defaultValues: {
      name: "",
      website: "",
      description: "",
      gradientId: generateRandomGradient(),
    },
  });
  console.log(form.control?._defaultValues);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Workspace</DialogTitle>
          <DialogDescription className="hidden" />
        </DialogHeader>
        <div className="mt-4">
          <Form {...form}>
            <form className="">
              <div className="flex items-center justify-center">
                <Avatar className="size-24 ">
                  <AvatarFallback
                    className={`text-4xl font-medium ${
                      GRADIENTS[form?.control?._defaultValues?.gradientId || 1]
                    }`}
                  >
                    W
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
                          // disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
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
                          // disabled={isSubmitting}
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
                          // disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end w-full mt-6 gap-x-4">
                <Button variant="secondary">
                  {/* {isSubmitting && <FiLoader className="animate-spin size-5 mr-2" />} */}
                  Cancel
                </Button>
                <Button>Create</Button>
              </div>
            </form>
          </Form>
          <div></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CreateWorkspace;
