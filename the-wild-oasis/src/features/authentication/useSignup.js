import { useMutation } from "@tanstack/react-query";
import { Signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            // console.log(user.fullName);
            toast.success(`Account successfully created!
            Please verify the new account from user\'s email.`)
        },
        onError: (err) => { 
            toast.error(err.message);
        }
    })
    return { signup, isLoading }
}