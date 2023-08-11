import { useAppSelector } from "./redux";

export function useAuth () {
    const { id, email, token } = useAppSelector((state) => state.userSlice);
    return {
        isAuth: !!email, 
        email,
        id,
        token
    }
}

// !! : double bang operator : !true => false, !!ture => true