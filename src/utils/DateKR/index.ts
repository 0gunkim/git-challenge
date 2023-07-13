import { DateType } from '../../components/Profile';

export const dataKR = (date: string) => {
  const changeDate = new Date(date);
  const year = changeDate.getFullYear();
  const month = changeDate.getMonth() + 1;
  const day = changeDate.getDate();
  return [year, month, day] as DateType;
};
