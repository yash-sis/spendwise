import { Currencies } from "@/lib/currencies";
import { z } from "zod";

export const UpdateUserCurrencySchema = z.object({
  currency: z.custom(
    (value) => {
      if (typeof value !== "string") return false;

      return Currencies.some((c) => c.value === value);
    },
    { message: "Invalid currency" }
  ),
});
