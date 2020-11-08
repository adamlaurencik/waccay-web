import { ZXCVBNScore } from 'zxcvbn';

export type PasswordStrengthMeterProps = {
  password: string;
};

export type PasswordStrengthMeterItemProps = {
  score: ZXCVBNScore;
};
