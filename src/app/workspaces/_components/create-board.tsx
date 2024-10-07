"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GRADIENTS } from "@/constants/gradients";
import { cn } from "@/lib/utils";
import { useState } from "react";

type CreateBoardProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateBoard = ({ isOpen, onClose }: CreateBoardProps) => {
  const [defaultBoardColorId, setDefaultBoardColorId] = useState(1);

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
                className={cn(
                  "size-12 rounded-md cursor-pointer",
                  color,
                  defaultBoardColorId === index + 1 &&
                    "border border-1 border-secondary"
                )}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CreateBoard;
