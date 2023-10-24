import dayjs from "dayjs";
import { Timestamp } from "firebase/firestore";

export const timestampToIsoDate = (value: Timestamp) => {
  return dayjs(value.toDate()).format("DD/MM/YYYY");
};

export const timestampToDate = (value: Timestamp) => {
  return dayjs(value.toDate()).toDate();
};
