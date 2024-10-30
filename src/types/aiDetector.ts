export interface AIDetectionResult {
  aiWords: number;
  fakePercentage: number;
  isHuman: number;
  otherFeedback: string | null;
  sentences: string[];
  status: boolean;
  textWords: number;
}