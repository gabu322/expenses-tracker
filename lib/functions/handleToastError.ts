import { Id, toast } from "react-toastify";

export function handleToastError(error: unknown, toastId?: Id) {
   let errorMessage = "Ocorreu um erro inesperado.";

   if (typeof error === "object" && error !== null) {
      const err = error as {
         response?: { data?: { error?: string; errors?: { message: string }[] } };
         message?: string;
      };

      if (err.response?.data?.error) {
         errorMessage = err.response.data.error;
      } else if (err.response?.data?.errors?.length) {
         errorMessage = err.response.data.errors[0].message;
      } else if (err.message) {
         errorMessage = err.message;
      }
   }

   // If a toastId is provided, update the existing toast; otherwise, show a new error toast
   if (toastId) toast.update(toastId, { render: errorMessage, type: "error", isLoading: false, autoClose: 2000 });
   else toast.error(errorMessage, { autoClose: 2000 });
}
