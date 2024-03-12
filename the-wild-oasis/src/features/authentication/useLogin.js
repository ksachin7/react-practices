import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Login as loginApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            // console.log(user);
            // Set/Update the cached data for the user
            // Note: using setQueryData directly modifies the cache and does not trigger a network request. 
            // This can be powerful for managing local state and ensuring a responsive user interface. 
            // However, be cautious when using it to avoid data inconsistencies between the client and server.
            queryClient.setQueryData(['user'], user.user);
            navigate("/dashboard", { replace: true });
        },
        onError: err => {
            // console.log("Error", err);
            toast.error("Provided email or password are incorrect!")
        }
    })
    return { login, isLoading };
}

export default useLogin;