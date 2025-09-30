import { ResumeValues } from "@/lib/validation";
import { useState } from "react";
import { generateSummary } from "./actions";
import { toast } from "sonner";
import { WandSparkles } from "lucide-react";
import { LoadingButton } from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

interface GenerateSummaryButtonProps {
  resumeData: ResumeValues;
  onSummaryGenerated: (summary: string) => void;
}

export const GenerateSummaryButton = ({
  onSummaryGenerated,
  resumeData,
}: GenerateSummaryButtonProps) => {
  //   const subscriptionLevel = useSubscriptionLevel();

  //   const premiumModal = usePremiumModal();

  const [loading, setLoading] = useState(false);

  async function handleClick() {
    // if (!canUseAITools(subscriptionLevel)) {
    //   premiumModal.setOpen(true);
    //   return;
    // }

    try {
      setLoading(true);
      const aiResponse = await generateSummary(resumeData);
      onSummaryGenerated(aiResponse);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="outline"
      type="button"
      onClick={handleClick}
      disabled={loading}
    >
      <WandSparkles className="size-4" />
      Generate (AI)
    </Button>
  );
};
