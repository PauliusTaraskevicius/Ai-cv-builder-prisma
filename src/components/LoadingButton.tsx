import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface LoadingButtonProps {
  loading: boolean;
  disabled: boolean;
  className: string;
  children: React.ReactNode;
}

export const LoadingButton = ({
  loading,
  disabled,
  className,
  ...props
}: LoadingButtonProps) => {
  return (
    <Button
      disabled={loading || disabled}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {loading && <Loader2 className="size-5 animate-spin" />}
      {props.children}
    </Button>
  );
};
