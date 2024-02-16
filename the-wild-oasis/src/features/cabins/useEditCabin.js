import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";


export function useEditCabin() {
    const queryClient = useQueryClient();

    const { mutate: editCabin, isLoading: isEditing } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () => {
            toast.success("cabin edited successfully!");
            queryClient.invalidateQueries({ queryKey: ["cabins"] });
            // reset();
        },
        onError: (err) => toast.error(err.message),
    });

    return { isEditing, editCabin };
}