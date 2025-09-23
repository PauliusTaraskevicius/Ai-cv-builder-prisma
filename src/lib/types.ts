import { ResumeValues } from "./validation";

export interface EditFormProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
}
