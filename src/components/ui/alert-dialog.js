"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/utils/cn";
import { Button } from "./button";

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Overlay
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
    />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] md:w-full dark:bg-neutral-900 rounded-lg",
            className
        )}
        {...props}
    />
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }) => (
    <div
        className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
        {...props}
    />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }) => (
    <div
        className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
        {...props}
    />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold text-neutral-900 dark:text-neutral-50", className)}
        {...props}
    />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
        ref={ref}
        className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
        {...props}
    />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Cancel
        ref={ref}
        className={cn(
            "mt-2 sm:mt-0",
            Button.className,
            "variant-outline"
        )}
        {...props}
    />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Action
        ref={ref}
        className={cn(
            "mt-2 sm:mt-0",
            Button.className,
            "variant-destructive"
        )}
        {...props}
    />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

export {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogPortal,
    AlertDialogOverlay
}; 