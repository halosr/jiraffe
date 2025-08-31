import { updateLoginFields } from "@/store/actions/login.action";
import type { RootState, AppDispatch } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const useLogin = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {email, password} = useSelector((state: RootState) => state.login || {})

    const handleChange = (field: string, value: string) => {
        dispatch(updateLoginFields(field, value))
    }

    return {email, password, handleChange}
}

export default useLogin;