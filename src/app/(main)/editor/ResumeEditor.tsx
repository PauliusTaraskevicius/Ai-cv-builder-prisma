"use client";

import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import { BreadCrumbs } from "./BreadCrumbs";
import { Footer } from "./Footer";
import { useState } from "react";
import { ResumeValues } from "@/lib/validation";
import { ResumePreviewSection } from "./ResumePreviewSection";
import { cn } from "@/lib/utils";

export const ResumeEditor = () => {
  const [resumeData, setResumeData] = useState<ResumeValues>({});
  const [showSmResumePreview, setShowSmResumePreview] = useState(false);

  const searchParams = useSearchParams();

  const currentStep = searchParams.get("step") || steps[0].key;

  const setStep = (key: string) => {
    const newSearchparams = new URLSearchParams(searchParams);
    newSearchparams.set("step", key);
    window.history.pushState(null, "", `?${newSearchparams.toString()}`);
  };

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-muted-foreground text-sm">
          Follow the steps bellow to create your resume. Your proggress will be
          saved automatically.
        </p>
      </header>
      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full">
          <div
            className={cn(
              "w-full space-y-6 overflow-y-auto p-3 md:block md:w-1/2",
              showSmResumePreview && "hidden",
            )}
          >
            <BreadCrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>

          <div className="grow md:border-r" />
          <ResumePreviewSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            className={cn(showSmResumePreview && "flex")}
          />
        </div>
      </main>
      <Footer
        currentStep={currentStep}
        setCurrentStep={setStep}
        showSmResumePreview={showSmResumePreview}
        setShowSmResumePreview={setShowSmResumePreview}
      />
    </div>
  );
};
