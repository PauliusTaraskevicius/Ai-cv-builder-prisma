"use client";

import { useState } from "react";
import { createCustomerPortalSession } from "./actions";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ManageSubscriptionButton = () => {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    try {
      setLoading(true);
      const redirectUrl = await createCustomerPortalSession();
      window.location.href = redirectUrl;
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button onClick={handleClick} disabled={loading}>
      Manage subscription
    </Button>
  );
};
