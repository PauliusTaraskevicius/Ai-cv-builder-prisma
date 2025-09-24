import { ResumePreview } from "@/components/ResumePreview";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import ColorPicker from "./ColorPicker";
// import BorderStyleButton from "./BorderStyleButton";
// import ColorPicker from "./ColorPicker";

interface ResumePreviewSectionProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
  className?: string;
}

export const ResumePreviewSection = ({
  resumeData,
  setResumeData,
  className,
}: ResumePreviewSectionProps) => {
  return (
    <div className="relative hidden w-1/2 md:flex">
      <div className="absolute top-1 left-1 flex flex-none flex-col gap-3 lg:top-3 lg:left-3">
        <ColorPicker
          color={resumeData.colorHex}
          onChange={(color) =>
            setResumeData({ ...resumeData, colorHex: color.hex })
          }
        />
      </div>
      <div className="bg-secondary flex w-full justify-center overflow-y-auto p-3">
        <ResumePreview
          resumeData={resumeData}
          className="max-w-2xl shadow-md"
        />
      </div>
    </div>
  );
};
