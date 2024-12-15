import { useEffect, useState } from "react";
import { Currency } from "../components/ui/currency/types";

type UseEndingProps = {
  stopOvers: number[];
  checkboxState: Record<string, boolean>;
  selectedCurrency: Currency;
  onChange: (checkboxState: Record<string, boolean>) => void;
  getCurrency: (currency: Currency) => void;
};

export const useEnding = ({
  stopOvers,
  checkboxState,
  selectedCurrency,
  onChange,
  getCurrency,
}: UseEndingProps) => {
  const [ending, setEnding] = useState<Record<number, string>>({});

  useEffect(() => {
    const temp: Record<number, string> = {};
    stopOvers.forEach((stops) => {
      if (stops === 0 || (stops >= 5 && stops <= 9)) {
        temp[stops] = "ок";
      } else if (stops === 1) {
        temp[stops] = "ка";
      } else if (stops >= 2 && stops <= 4) {
        temp[stops] = "ки";
      }
    });
    setEnding(temp);
    onChange(checkboxState);
    getCurrency(selectedCurrency);
  }, [stopOvers, checkboxState, selectedCurrency]);

  return { ending };
};
