import { useEffect, useState } from "react";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/.auth/me")
            .then((res) => res.json())
            .then((data) => {
                if (data.clientPrincipal) {
                    setUser(data.clientPrincipal);
                } else {
                    setUser(null);
                }
                setLoading(false);
            })
            .catch(() => {
                setUser(null);
                setLoading(false);
            });
    }, []);

    return { user, loading };
};

export default useAuth;
